"""Rebuild article content from the owner's Word documents and numbered folders."""
from pathlib import Path
from html import escape
import json
import re
import shutil
from docx import Document
from docx.text.paragraph import Paragraph
from docx.oxml.ns import qn

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / '素材'
PUBLIC = ROOT / 'public' / 'articles'
PUBLIC.mkdir(parents=True, exist_ok=True)
articles = []
counts = {'tables': 0, 'document_images': 0, 'images': 0, 'videos': 0}

def convert_document(path, category):
    doc = Document(path)
    current = None
    image_index = 0

    def inline(node):
        nonlocal image_index
        tag = node.tag.split('}')[-1]
        if tag == 't': return escape(node.text or '')
        if tag == 'tab': return '　'
        if tag in ('br', 'cr'): return '<br />'
        if tag == 'blip':
            image_index += 1
            part = doc.part.related_parts[node.get(qn('r:embed'))]
            name = f'{category}-figure-{image_index}{Path(str(part.partname)).suffix}'
            (PUBLIC / name).write_bytes(part.blob)
            counts['document_images'] += 1
            return f'<img src="/articles/{name}" alt="文章配图 {image_index}" loading="lazy" />'
        if tag == 'hyperlink':
            content = ''.join(inline(c) for c in node)
            rel = doc.part.rels.get(node.get(qn('r:id')))
            url = str(rel.target_ref) if rel else ''
            if url.startswith(('http://', 'https://', 'mailto:')):
                return f'<a href="{escape(url, quote=True)}" target="_blank" rel="noreferrer">{content}</a>'
            return content
        content = ''.join(inline(c) for c in node)
        if tag == 'r':
            props = node.find(qn('w:rPr'))
            if props is not None:
                for prop, htmltag in [('b', 'strong'), ('i', 'em')]:
                    el = props.find(qn('w:' + prop))
                    if el is not None and el.get(qn('w:val')) not in ('0', 'false'):
                        content = f'<{htmltag}>{content}</{htmltag}>'
        return content

    def block(node):
        tag = node.tag.split('}')[-1]
        if tag == 'p':
            p = Paragraph(node, doc)
            content = inline(node)
            if not content.strip(): return ''
            level = re.search(r'Heading (\d+)', p.style.name)
            h = min(int(level.group(1)) + 1, 6) if level else None
            return f'<h{h}>{content}</h{h}>' if h else f'<p>{content}</p>'
        if tag == 'tbl':
            counts['tables'] += 1
            rows = []
            for ri, row in enumerate(node.findall(qn('w:tr'))):
                cells = []
                for cell in row.findall(qn('w:tc')):
                    props = cell.find(qn('w:tcPr'))
                    span = props.find(qn('w:gridSpan')) if props is not None else None
                    attr = f' colspan="{span.get(qn("w:val"))}"' if span is not None else ''
                    ct = 'th' if ri == 0 else 'td'
                    cells.append(f'<{ct}{attr}>' + ''.join(block(c) for c in cell if c.tag != qn('w:tcPr')) + f'</{ct}>')
                rows.append('<tr>' + ''.join(cells) + '</tr>')
            header = node.find(qn('w:tr'))
            labels = [''.join(t.text or '' for t in c.iter(qn('w:t'))).strip() for c in header.findall(qn('w:tc'))] if header is not None else []
            compact = {'编号': 48, '层级': 80, 'S': 40, 'O': 40, 'D': 40, 'AP': 48}
            cols = ''.join(f'<col style="width:{compact[label]}px" />' if label in compact else '<col />' for label in labels)
            return f'<div class="table-scroll" data-columns="{len(labels)}" role="region" aria-label="文章表格" tabindex="0"><table><colgroup>{cols}</colgroup><tbody>' + ''.join(rows) + '</tbody></table></div>'
        return ''.join(block(c) for c in node)

    for node in doc.element.body:
        if node.tag == qn('w:p') and Paragraph(node, doc).style.name == 'Heading 1':
            current = {'slug': f'{category}-{1 + sum(a["category"] == category for a in articles):02}', 'category': category, 'title': Paragraph(node, doc).text.strip(), 'html': '', 'media': []}
            articles.append(current)
        elif current is not None:
            current['html'] += block(node)
    for article in [a for a in articles if a['category'] == category]:
        plain = re.sub('<[^>]+>', ' ', article['html'])
        plain = re.sub(r'\s+', ' ', plain).strip()
        article['summary'] = plain[:95] + ('…' if len(plain) > 95 else '')
        article['minutes'] = max(1, round(len(plain) / 450))

convert_document(SOURCE / '1行业调研' / '行业调研.docx', 'research')
convert_document(SOURCE / '2思想随笔' / '思想随笔.docx', 'essays')
for folder in sorted((SOURCE / '3立象尽意').iterdir()):
    if not folder.is_dir(): continue
    number, title = folder.name.split(' ', 1)
    slug = f'visions-{int(number):02}'
    dest = PUBLIC / slug
    dest.mkdir(exist_ok=True)
    media = []
    for i, f in enumerate(sorted(folder.iterdir())):
        if f.suffix.lower() not in ('.png', '.jpg', '.jpeg', '.webp', '.mp4'): continue
        name = f'{i + 1:02}{f.suffix.lower()}'
        shutil.copy2(f, dest / name)
        kind = 'video' if f.suffix.lower() == '.mp4' else 'image'
        counts['videos' if kind == 'video' else 'images'] += 1
        media.append({'kind': kind, 'src': f'/articles/{slug}/{name}', 'alt': f'{title} · 画面 {i + 1}'})
    ni = sum(m['kind'] == 'image' for m in media)
    nv = sum(m['kind'] == 'video' for m in media)
    summary = ' / '.join(([f'{ni} 张场景图'] if ni else []) + ([f'{nv} 段视频'] if nv else []))
    articles.append({'slug': slug, 'category': 'visions', 'title': title, 'summary': summary, 'html': '', 'minutes': 0, 'media': media})
(ROOT / 'src/content/articles.json').write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({'articles': {c: sum(a['category'] == c for a in articles) for c in ('research', 'essays', 'visions')}, **counts}, ensure_ascii=False))
