import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import { articles, columns, entries } from "@/content/articles";
export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find(a => a.slug === slug);
  return { title: a?.title || "文章未找到", description: a?.summary };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find(a => a.slug === slug);
  if (!a) notFound();
  const column = columns.find(c => c.id === a.category)!;
  const siblings = entries.filter(e => e.category === a.category);
  const index = siblings.findIndex(e => e.slug === slug);
  const previous = siblings[index - 1];
  const next = siblings[index + 1];
  return <>
    <Header />
    <main id="main">
      <section className="wrap article-heading">
        <Link className="back-link" href={`/#${column.id}`}>← 返回{column.title}</Link>
        <div className="article-kicker"><span className="eyebrow">{column.english} / {String(index + 1).padStart(2, "0")}</span><span>{a.minutes > 0 ? `约 ${a.minutes} 分钟阅读` : a.summary}</span></div>
        <h1>{a.title}</h1>
      </section>
      <section className="light reading-section" id="article-body">
        <div className="wrap reading-layout">
          <aside className="reading-aside"><span className="eyebrow">本栏篇目</span><h2>{column.title}</h2><nav aria-label={`${column.title}文章目录`}>{siblings.map((s, i) => <Link key={s.slug} href={`${s.href}#${s.kind === "3D 交互" ? "interactive" : "article-body"}`} aria-current={s.slug === slug ? "page" : undefined}><span>{String(i + 1).padStart(2, "0")}</span>{s.title}</Link>)}</nav></aside>
          <article className="reading-content">
            {a.html && <div className="article-prose" dangerouslySetInnerHTML={{ __html: a.html }} />}
            {a.media.length > 0 && <div className="article-gallery">{a.media.filter(m => m.kind === "video").map(m => <figure key={m.src}><video controls playsInline preload="metadata" aria-label={`${a.title}视频`}><source src={m.src} type="video/mp4" />您的浏览器不支持视频播放，<a href={m.src}>下载视频</a>。</video><figcaption>{a.title} · 动态演示</figcaption></figure>)}{a.media.filter(m => m.kind === "image").map((m, i) => <figure key={m.src}><a href={m.src} target="_blank" rel="noreferrer" aria-label={`查看原图：${m.alt}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.src} alt={m.alt} loading="lazy" />
            </a><figcaption><span>{String(i + 1).padStart(2, "0")} / {a.title}</span><a href={m.src} target="_blank" rel="noreferrer">查看原图 ↗</a></figcaption></figure>)}</div>}
            <div className="article-pagination">{previous ? <Link href={previous.href}><small>← 上一篇</small>{previous.title}</Link> : <Link href={`/#${column.id}`}><small>← 栏目首页</small>{column.title}</Link>}{next && <Link href={next.href}><small>下一篇 →</small>{next.title}</Link>}</div>
          </article>
        </div>
      </section>
    </main>
    <footer className="footer wrap"><Link href={`/#${column.id}`}>返回{column.title}</Link><a href="#top">返回顶部 ↑</a></footer>
  </>;
}
