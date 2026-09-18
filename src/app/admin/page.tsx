"use client";
import { useEffect, useMemo, useState } from "react";
import { columns } from "@/content/articles";
import { STATS_ENDPOINT, isStatsConfigured } from "@/lib/stats-config";
import styles from "./admin.module.css";

type Media = { kind: "image" | "video"; src: string; alt?: string };
type Article = {
  slug: string;
  category: string;
  title: string;
  html: string;
  media: Media[];
  summary: string;
  minutes: number;
};
type SiteData = {
  brand: string;
  hero: { eyebrow: string; edition: string; titleLine1: string; titleAccent: string; subtitle: string; button: string };
  columns: { id: string; title: string; english: string; intro: string }[];
  footer: { main: string; right: string };
};
type Auth = { token: string; owner: string; repo: string; branch: string };
type Base = { refSha: string; commitSha: string; treeSha: string };
type Pending = { id: string; slug: string; file: File; kind: "image" | "video"; alt: string; filename: string; url: string };
type Selected = { kind: "site" } | { kind: "article"; slug: string } | { kind: "new"; category: string; slug: string } | { kind: "stats" };
type Status = { type: "ok" | "err" | "busy"; msg: string } | null;

const API = "https://api.github.com";
const CONTENT_DIR = "src/content";

function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk) as unknown as number[]);
  return btoa(bin);
}
function decodeBase64(b64: string): string {
  const bin = atob(b64);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}
function fileToBase64(file: File): Promise<string> {
  return file.arrayBuffer().then((buf) => {
    const bytes = new Uint8Array(buf);
    let bin = "";
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk) as unknown as number[]);
    return btoa(bin);
  });
}
function sanitizeName(name: string): string {
  const dot = name.lastIndexOf(".");
  const ext = dot >= 0 ? name.slice(dot).toLowerCase().replace(/[^.a-z0-9]/g, "") : "";
  // 保留中文/Unicode 字母数字与连字符，仅把文件系统不安全字符与空白替换为“-”，避免中文名被洗成 file.mp4 造成覆盖或空提交
  const base = (dot >= 0 ? name.slice(0, dot) : name)
    .replace(/[\\/:*?"<>|#\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  const safe = base || "file";
  // 加 4 位随机后缀保证同名文件不互相覆盖（否则 git/trees 判定无变化→空提交）
  const suffix = Math.random().toString(36).slice(2, 6);
  return `${safe}-${suffix}${ext}`;
}

export default function AdminPage() {
  const [auth, setAuth] = useState<Auth>({ token: "", owner: "trxunho", repo: "robotics-portfolio-public", branch: "main" });
  const [phase, setPhase] = useState<"login" | "app">("login");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [articlesData, setArticlesData] = useState<Article[]>([]);
  const [base, setBase] = useState<Base | null>(null);
  const [selected, setSelected] = useState<Selected>({ kind: "site" });
  const [dirtySite, setDirtySite] = useState(false);
  const [dirtyArticles, setDirtyArticles] = useState(false);
  const [pendingMedia, setPendingMedia] = useState<Pending[]>([]);
  const [removedMedia, setRemovedMedia] = useState<string[]>([]);

  useEffect(() => {
    const saved = sessionStorage.getItem("cms_auth");
    if (saved) {
      try {
        const a = JSON.parse(saved) as Auth;
        setAuth(a);
      } catch {}
    }
  }, []);

  function gh<T = any>(path: string, opts: { method?: string; body?: any } = {}): Promise<T> {
    const init: RequestInit = {
      method: opts.method || "GET",
      headers: {
        Authorization: `Bearer ${auth.token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    };
    return fetch(API + path, init).then(async (res) => {
      if (!res.ok) {
        let msg = `${res.status} ${res.statusText}`;
        try {
          const j = await res.json();
          if (j.message) msg = j.message;
        } catch {}
        throw new Error(msg);
      }
      if (res.status === 204) return null as any;
      return res.json() as Promise<T>;
    });
  }

  async function getBase(): Promise<Base> {
    const ref = await gh<any>(`/repos/${auth.owner}/${auth.repo}/git/refs/heads/${auth.branch}`);
    const commit = await gh<any>(`/repos/${auth.owner}/${auth.repo}/git/commits/${ref.object.sha}`);
    return { refSha: ref.object.sha, commitSha: ref.object.sha, treeSha: commit.tree.sha };
  }

  async function connect() {
    if (!auth.token) {
      setStatus({ type: "err", msg: "请填写 GitHub 个人访问令牌（PAT）。" });
      return;
    }
    setBusy(true);
    setStatus({ type: "busy", msg: "正在连接 GitHub…" });
    try {
      await gh("/user");
      const b = await getBase();
      setBase(b);
      let repoInfo: any = null;
      try {
        repoInfo = await gh<any>(`/repos/${auth.owner}/${auth.repo}`);
      } catch (e: any) {
        throw new Error("无法读取仓库「" + auth.owner + "/" + auth.repo + "」：" + (e?.message || e) + "。请确认仓库名/分支正确，且令牌有该仓库访问权限。");
      }
      if (!repoInfo?.permissions?.push) {
        throw new Error(
          "该令牌没有此仓库的写入权限，无法保存。解决：① 经典 PAT 勾选 repo（公开仓库也可用 public_repo）作用域；② 精细化令牌(fine-grained)需在 trxunho/robotics-portfolio-public 授予 Contents: Read and write。当前令牌仅能读取。"
        );
      }
      const a = await gh<any>(`/repos/${auth.owner}/${auth.repo}/contents/${CONTENT_DIR}/articles.json`);
      const s = await gh<any>(`/repos/${auth.owner}/${auth.repo}/contents/${CONTENT_DIR}/site.json`);
      setArticlesData(JSON.parse(decodeBase64(a.content)));
      setSiteData(JSON.parse(decodeBase64(s.content)));
      sessionStorage.setItem("cms_auth", JSON.stringify(auth));
      setPhase("app");
      setStatus(null);
    } catch (e: any) {
      const m = e?.message || String(e);
      if (/Resource not accessible|not accessible by personal access token/i.test(m)) {
        setStatus({ type: "err", msg: "连接失败：令牌无权访问该仓库。请使用具备 repo（或 public_repo）作用域的 PAT；若用精细化令牌，需在 trxunho/robotics-portfolio-public 授予 Contents: Read and write。" });
      } else {
        setStatus({ type: "err", msg: "连接失败：" + m });
      }
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    sessionStorage.removeItem("cms_auth");
    setPhase("login");
    setSiteData(null);
    setArticlesData([]);
    setSelected({ kind: "site" });
  }

  function patchSite(updater: (s: SiteData) => void) {
    setSiteData((prev) => {
      if (!prev) return prev;
      const n = JSON.parse(JSON.stringify(prev));
      updater(n);
      return n;
    });
    setDirtySite(true);
  }
  function patchArticle(slug: string, updater: (a: Article) => void) {
    setArticlesData((prev) => prev.map((a) => (a.slug === slug ? (() => { const n = JSON.parse(JSON.stringify(a)); updater(n); return n; })() : a)));
    setDirtyArticles(true);
  }
  function nextSlug(category: string): string {
    let max = 0;
    articlesData.forEach((a) => {
      const m = a.slug.match(new RegExp(`^${category}-(\\d+)$`));
      if (m) max = Math.max(max, parseInt(m[1], 10));
    });
    return `${category}-${String(max + 1).padStart(2, "0")}`;
  }
  function createArticle(category: string) {
    const slug = nextSlug(category);
    const art: Article = { slug, category, title: "", html: "", media: [], summary: "", minutes: 0 };
    setArticlesData((prev) => [...prev, art]);
    setDirtyArticles(true);
    setSelected({ kind: "new", category, slug });
  }
  function deleteArticle(slug: string) {
    const art = articlesData.find((a) => a.slug === slug);
    if (!art) return;
    if (!confirm(`确定删除文章「${art.title || slug}」吗？相关媒体文件也会一并删除（保存后生效）。`)) return;
    setArticlesData((prev) => prev.filter((a) => a.slug !== slug));
    art.media.forEach((m) => {
      const fn = m.src.split("/").pop();
      if (fn) setRemovedMedia((p) => (p.includes(`public/articles/${slug}/${fn}`) ? p : [...p, `public/articles/${slug}/${fn}`]));
    });
    setDirtyArticles(true);
    setSelected({ kind: "site" });
  }
  function addUrlMedia(slug: string, kind: "image" | "video", src: string, alt: string) {
    if (!src) return;
    patchArticle(slug, (a) => {
      a.media = a.media || [];
      a.media.push({ kind, src, alt: alt || "" });
    });
  }
  function addFileMedia(slug: string, file: File) {
    const kind: "image" | "video" = file.type.startsWith("video") ? "video" : "image";
    const filename = sanitizeName(file.name);
    const url = URL.createObjectURL(file);
    setPendingMedia((p) => [...p, { id: Math.random().toString(36).slice(2), slug, file, kind, alt: file.name, filename, url }]);
  }
  function removePending(id: string) {
    setPendingMedia((p) => p.filter((m) => m.id !== id));
  }
  function removeCommittedMedia(slug: string, index: number) {
    const art = articlesData.find((a) => a.slug === slug);
    if (!art) return;
    const m = art.media[index];
    const fn = m?.src.split("/").pop();
    if (fn) setRemovedMedia((p) => (p.includes(`public/articles/${slug}/${fn}`) ? p : [...p, `public/articles/${slug}/${fn}`]));
    patchArticle(slug, (a) => {
      a.media = a.media.filter((_, i) => i !== index);
    });
  }

  async function commitFiles(files: { path: string; content?: string; encoding?: string; deletion?: boolean }[]) {
    const b = await getBase();
    const tree: any[] = [];
    for (const f of files) {
      if (f.deletion) continue;
      const r = await gh<any>(`/repos/${auth.owner}/${auth.repo}/git/blobs`, { method: "POST", body: { content: f.content, encoding: f.encoding } });
      tree.push({ path: f.path, mode: "100644", type: "blob", sha: r.sha });
    }
    for (const f of files) if (f.deletion) tree.push({ path: f.path, mode: "100644", type: "blob", sha: null });
    const treeRes = await gh<any>(`/repos/${auth.owner}/${auth.repo}/git/trees`, { method: "POST", body: { base_tree: b.treeSha, tree } });
    const parts: string[] = [];
    const ups = files.filter((f) => !f.deletion);
    const dels = files.filter((f) => f.deletion);
    if (ups.some((f) => f.path.endsWith("articles.json"))) parts.push("articles.json");
    if (ups.some((f) => f.path.endsWith("site.json"))) parts.push("site.json");
    const mediaCount = ups.filter((f) => f.path.startsWith("public/articles/")).length;
    if (mediaCount) parts.push(`上传 ${mediaCount} 个媒体`);
    if (dels.length) parts.push(`删除 ${dels.length} 个文件`);
    const message = `内容管理更新 · ${parts.join("，") || "调整"}`;
    const commitRes = await gh<any>(`/repos/${auth.owner}/${auth.repo}/git/commits`, {
      method: "POST",
      body: { message, tree: treeRes.sha, parents: [b.commitSha] },
    });
    await gh(`/repos/${auth.owner}/${auth.repo}/git/refs/heads/${auth.branch}`, { method: "PATCH", body: { sha: commitRes.sha } });
    return commitRes.sha;
  }

  async function save() {
    if (!auth.token || !base) return;
    setBusy(true);
    setStatus({ type: "busy", msg: "正在提交到 GitHub…" });
    try {
      // 关键修复：先把本次待上传的媒体并入 articlesData，再序列化 articles.json。
      // 否则写进仓库的 articles.json 不含新视频引用，网页就读不到、看不到。
      const finalArticles = articlesData.map((a) => {
        const added = pendingMedia.filter((m) => m.slug === a.slug);
        if (!added.length) return a;
        return {
          ...a,
          media: [
            ...(a.media || []),
            ...added.map((m) => ({ kind: m.kind, src: `/articles/${m.slug}/${m.filename}`, alt: m.alt || "" })),
          ],
        };
      });

      const files: { path: string; content?: string; encoding?: string; deletion?: boolean }[] = [];
      if (dirtyArticles || pendingMedia.length || removedMedia.length) {
        const json = JSON.stringify(finalArticles, null, 2);
        files.push({ path: `${CONTENT_DIR}/articles.json`, content: utf8ToBase64(json), encoding: "base64" });
      }
      if (dirtySite && siteData) {
        const json = JSON.stringify(siteData, null, 2);
        files.push({ path: `${CONTENT_DIR}/site.json`, content: utf8ToBase64(json), encoding: "base64" });
      }
      for (const m of pendingMedia) {
        const b64 = await fileToBase64(m.file);
        files.push({ path: `public/articles/${m.slug}/${m.filename}`, content: b64, encoding: "base64" });
      }
      for (const p of removedMedia) files.push({ path: p, deletion: true });
      if (files.length === 0) {
        setStatus({ type: "ok", msg: "没有需要保存的更改。" });
        setBusy(false);
        return;
      }
      await commitFiles(files);
      const b2 = await getBase();
      setBase(b2);
      setArticlesData(finalArticles);
      setDirtyArticles(false);
      setDirtySite(false);
      setPendingMedia([]);
      setRemovedMedia([]);
      setStatus({
        type: "ok",
        msg: "已保存到 GitHub ✓ 提交成功，GitHub Pages 正在自动重新部署（约 1–2 分钟）。如需把更改同步到 WorkBuddy 国内站点，告诉我「同步」即可。",
      });
    } catch (e: any) {
      const m = e?.message || String(e);
      if (/Resource not accessible|not accessible by personal access token/i.test(m)) {
        setStatus({ type: "err", msg: "保存失败：你的 PAT 没有写入权限，无法提交。请改用具备 repo（或 public_repo）作用域的令牌；若用精细化令牌(fine-grained)，需在 trxunho/robotics-portfolio-public 授予 Contents: Read and write。" });
      } else {
        setStatus({ type: "err", msg: "保存失败：" + m });
      }
    } finally {
      setBusy(false);
    }
  }
  const currentArticle = useMemo(() => {
    if (selected.kind === "article" || selected.kind === "new") return articlesData.find((a) => a.slug === (selected as any).slug) || null;
    return null;
  }, [selected, articlesData]);

  const changed = dirtySite || dirtyArticles || pendingMedia.length > 0 || removedMedia.length > 0;

  if (phase === "login") {
    return (
      <div className={styles.app}>
        <div className={styles.login}>
          <h2>内容管理后台</h2>
          <p>
            使用你的 GitHub 个人访问令牌（PAT，需 <code>repo</code> 权限）登录，即可在浏览器中直接编辑网页文字、图片与视频，并在各栏目下新增文章。所有更改会提交到仓库
            <code> {auth.owner}/{auth.repo}</code> 并自动重新部署。
          </p>
          <div className={styles.field}>
            <label className={styles.label}>GitHub 令牌 (PAT)</label>
            <input
              className={styles.input}
              type="password"
              value={auth.token}
              onChange={(e) => setAuth((a) => ({ ...a, token: e.target.value }))}
              placeholder="ghp_… 或 github_pat_…"
            />
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>仓库所有者</label>
              <input className={styles.input} value={auth.owner} onChange={(e) => setAuth((a) => ({ ...a, owner: e.target.value }))} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>仓库名</label>
              <input className={styles.input} value={auth.repo} onChange={(e) => setAuth((a) => ({ ...a, repo: e.target.value }))} />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>分支</label>
            <input className={styles.input} value={auth.branch} onChange={(e) => setAuth((a) => ({ ...a, branch: e.target.value }))} />
          </div>
          <button className={styles.btn} disabled={busy} onClick={connect}>
            {busy ? "连接中…" : "连接并加载内容"}
          </button>
          {status && <div className={`${styles.status} ${styles[status.type]}`}>{status.msg}</div>}
          <details style={{ marginTop: 14, fontSize: 13, lineHeight: 1.7 }}>
            <summary style={{ cursor: "pointer", color: "#58a6ff" }}>不会生成令牌？点这里看详细步骤（两种方式任选其一）</summary>
            <div style={{ marginTop: 8, opacity: 0.9 }}>
              <p style={{ margin: "6px 0" }}>
                <strong>方式一 · 经典令牌（最简单，推荐）</strong>
              </p>
              <ol style={{ margin: "0 0 10px 18px", padding: 0 }}>
                <li>GitHub 头像 → Settings → Developer settings → Personal access tokens → <strong>Tokens (classic)</strong></li>
                <li>Generate new token (classic)</li>
                <li>勾选 <code>repo</code>（公开仓库勾 <code>public_repo</code> 也够）→ 生成 → 复制</li>
              </ol>
              <p style={{ margin: "6px 0" }}>
                <strong>方式二 · 精细化令牌（Fine-grained）</strong>
                <br />
                <em>注意：「Read and write」不在勾选列表里，它是选完权限之后才出现的下拉项。</em>
              </p>
              <ol style={{ margin: "0 0 10px 18px", padding: 0 }}>
                <li>Tokens (fine-grained) → Generate new token</li>
                <li>Repository access 选 <strong>Only select repositories</strong> → 选中 <code>{auth.owner}/{auth.repo}</code></li>
                <li>
                  Permissions 里点 <strong>+ Add permissions</strong>，在搜索框输入 <code>Contents</code>，勾上 <strong>Contents</strong>，点面板底部的{" "}
                  <strong>Add permissions</strong> 按钮
                </li>
                <li>
                  回到 Permissions 表格，找到刚加进来的 <strong>Contents</strong> 行，把右侧下拉从 <strong>No access</strong> 改成{" "}
                  <strong>Read and write</strong>
                </li>
                <li>Generate token → 复制（令牌只显示一次）</li>
              </ol>
              <p className={styles.muted} style={{ margin: "0 0 4px" }}>
                两种方式都只需「该仓库」的读写权限；Metadata 是自动带的只读项，不用管。
              </p>
            </div>
          </details>
          <p className={styles.muted} style={{ marginTop: 14 }}>
            令牌仅保存在当前浏览器会话（关闭标签页即清除），并直接用于访问 GitHub API，不会发送给任何第三方。
          </p>
          <details style={{ marginTop: 10, fontSize: 13, lineHeight: 1.7 }}>
            <summary style={{ cursor: "pointer", color: "#58a6ff" }}>保存后多久能在线上看到？两个站点的更新机制</summary>
            <div style={{ marginTop: 8, opacity: 0.9 }}>
              <p style={{ margin: "6px 0" }}>
                <strong>① trxunho.github.io（GitHub Pages）</strong>：保存后由 GitHub Actions 自动构建并部署，通常 <strong>1–2 分钟</strong> 即可上线，无需等待定时任务。
              </p>
              <p style={{ margin: "6px 0" }}>
                <strong>② tanrongxin-cms.app.workbuddy.host（WorkBuddy）</strong>：由部署同步任务更新。如需立即生效，可在 WorkBuddy 的「自动化」面板找到「同步作品集站点」任务，点击 <strong>运行</strong> 手动触发（也默认每小时自动同步一次）。
              </p>
              <p className={styles.muted} style={{ margin: "6px 0 0" }}>
                注：GitHub Pages 自动部署需要在仓库 <code>robotics-portfolio-public</code> 的 Settings → Secrets 中配置一个名为 <code>PAGES_DEPLOY_TOKEN</code> 的令牌（即你登录后台所用的同一枚 <code>repo</code> 令牌即可）。
              </p>
            </div>
          </details>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <div>
          <h1>内容管理后台</h1>
          <div className={styles.repo}>
            {auth.owner}/{auth.repo} · {auth.branch}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {changed && <span className={styles.saved}>● 有未保存更改</span>}
          <button className={`${styles.btn} ${styles.btnGhost}`} onClick={logout}>
            断开
          </button>
          <button className={styles.btn} disabled={busy || !changed} onClick={save}>
            {busy ? "保存中…" : "保存更改"}
          </button>
        </div>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.navGroup}>
            <button className={`${styles.navItem} ${selected.kind === "site" ? styles.active : ""}`} onClick={() => setSelected({ kind: "site" })}>
              ⚙ 站点文字
            </button>
          </div>

          <div className={styles.navGroup}>
            <button className={`${styles.navItem} ${selected.kind === "stats" ? styles.active : ""}`} onClick={() => setSelected({ kind: "stats" })}>
              📊 访问统计
            </button>
          </div>
          {columns.map((c) => {
            const list = articlesData.filter((a) => a.category === c.id);
            return (
              <div className={styles.navGroup} key={c.id}>
                <div className={styles.navTitle}>{c.title}</div>
                {list.map((a) => (
                  <button
                    key={a.slug}
                    className={`${styles.navItem} ${selected.kind !== "site" && (selected as any).slug === a.slug ? styles.active : ""}`}
                    onClick={() => setSelected({ kind: "article", slug: a.slug })}
                  >
                    <span>{a.title || a.slug}</span>
                    <span className={styles.count}>{a.media?.length ? `🖼${a.media.length}` : ""}</span>
                  </button>
                ))}
                <button className={styles.addBtn} onClick={() => createArticle(c.id)}>
                  ＋ 新增文章
                </button>
              </div>
            );
          })}
        </aside>

        <main className={styles.main}>
          {status && <div className={`${styles.status} ${styles[status.type]}`} style={{ marginBottom: 20 }}>{status.msg}</div>}

          {selected.kind === "site" && siteData && (
            <SiteEditor site={siteData} patch={patchSite} />
          )}

          {(selected.kind === "article" || selected.kind === "new") && currentArticle && (
            <ArticleEditor
              article={currentArticle}
              isNew={selected.kind === "new"}
              pending={pendingMedia.filter((m) => m.slug === currentArticle.slug)}
              onPatch={(u) => patchArticle(currentArticle.slug, u)}
              onDelete={() => deleteArticle(currentArticle.slug)}
              onAddUrl={(k, src, alt) => addUrlMedia(currentArticle.slug, k, src, alt)}
              onAddFile={(f) => addFileMedia(currentArticle.slug, f)}
              onRemovePending={removePending}
              onRemoveCommitted={(i) => removeCommittedMedia(currentArticle.slug, i)}
            />
          )}

          {selected.kind === "stats" && <StatsViewer />}
        </main>
      </div>
    </div>
  );
}

function SiteEditor({ site, patch }: { site: SiteData; patch: (u: (s: SiteData) => void) => void }) {
  const h = site.hero;
  return (
    <>
      <div className={styles.card}>
        <h2>站点文字</h2>
        <p className={styles.hint}>这些文字显示在主页与各栏目，修改后保存即生效。</p>
        <div className={styles.field}>
          <label className={styles.label}>品牌 / 页脚署名</label>
          <input className={styles.input} value={site.brand} onChange={(e) => patch((s) => (s.brand = e.target.value))} />
        </div>
        <div className={styles.sectionBar}>主页主视觉 Hero</div>
        <div className={styles.row3}>
          <div className={styles.field}>
            <label className={styles.label}>上方小标 (eyebrow)</label>
            <input className={styles.input} value={h.eyebrow} onChange={(e) => patch((s) => (s.hero.eyebrow = e.target.value))} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>版本署名 (edition)</label>
            <input className={styles.input} value={h.edition} onChange={(e) => patch((s) => (s.hero.edition = e.target.value))} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>按钮文字</label>
            <input className={styles.input} value={h.button} onChange={(e) => patch((s) => (s.hero.button = e.target.value))} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>主标题第一行</label>
            <input className={styles.input} value={h.titleLine1} onChange={(e) => patch((s) => (s.hero.titleLine1 = e.target.value))} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>主标题强调行</label>
            <input className={styles.input} value={h.titleAccent} onChange={(e) => patch((s) => (s.hero.titleAccent = e.target.value))} />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>副标题（每行一段，用换行分隔）</label>
          <textarea className={styles.textarea} style={{ minHeight: 90 }} value={h.subtitle} onChange={(e) => patch((s) => (s.hero.subtitle = e.target.value))} />
        </div>
        <div className={styles.sectionBar}>页脚</div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>页脚署名主体</label>
            <input className={styles.input} value={site.footer.main} onChange={(e) => patch((s) => (s.footer.main = e.target.value))} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>页脚右侧文字</label>
            <input className={styles.input} value={site.footer.right} onChange={(e) => patch((s) => (s.footer.right = e.target.value))} />
          </div>
        </div>
      </div>

      {site.columns.map((c, i) => (
        <div className={styles.card} key={c.id}>
          <h2>栏目：{c.title}</h2>
          <p className={styles.hint}>栏目 {i + 1} / {c.english}</p>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>栏目名称</label>
              <input className={styles.input} value={c.title} onChange={(e) => patch((s) => (s.columns[i].title = e.target.value))} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>英文副标</label>
              <input className={styles.input} value={c.english} onChange={(e) => patch((s) => (s.columns[i].english = e.target.value))} />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>栏目简介</label>
            <textarea className={styles.textarea} style={{ minHeight: 70 }} value={c.intro} onChange={(e) => patch((s) => (s.columns[i].intro = e.target.value))} />
          </div>
        </div>
      ))}
    </>
  );
}

function ArticleEditor({
  article,
  isNew,
  pending,
  onPatch,
  onDelete,
  onAddUrl,
  onAddFile,
  onRemovePending,
  onRemoveCommitted,
}: {
  article: Article;
  isNew: boolean;
  pending: Pending[];
  onPatch: (u: (a: Article) => void) => void;
  onDelete: () => void;
  onAddUrl: (k: "image" | "video", src: string, alt: string) => void;
  onAddFile: (f: File) => void;
  onRemovePending: (id: string) => void;
  onRemoveCommitted: (i: number) => void;
}) {
  const [urlKind, setUrlKind] = useState<"image" | "video">("image");
  const [urlSrc, setUrlSrc] = useState("");
  const [urlAlt, setUrlAlt] = useState("");

  return (
    <>
      <div className={styles.card}>
        <h2>{isNew ? "新增文章" : "编辑文章"}</h2>
        <p className={styles.hint}>
          slug：<code>{article.slug}</code> · 栏目：{article.category} {isNew && "（保存后生效）"}
        </p>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>标题</label>
            <input className={styles.input} value={article.title} onChange={(e) => onPatch((a) => (a.title = e.target.value))} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>阅读分钟数（visions 可留 0）</label>
            <input
              className={styles.input}
              type="number"
              value={article.minutes}
              onChange={(e) => onPatch((a) => (a.minutes = parseInt(e.target.value || "0", 10)))}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>正文（可直接写 HTML；段落用 &lt;p&gt;…&lt;/p&gt; 包裹，表格用 .table-scroll）</label>
          <textarea className={styles.textarea} value={article.html} onChange={(e) => onPatch((a) => (a.html = e.target.value))} />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>摘要（列表/分享卡片显示）</label>
          <textarea className={styles.textarea} style={{ minHeight: 60 }} value={article.summary} onChange={(e) => onPatch((a) => (a.summary = e.target.value))} />
        </div>
        <div className={styles.sectionBar}>正文预览</div>
        <div className={styles.preview} dangerouslySetInnerHTML={{ __html: article.html || "<p style='color:#999'>（暂无正文）</p>" }} />
      </div>

      <div className={styles.card}>
        <h2>图片与视频</h2>
        <p className={styles.hint}>上传文件会保存到仓库 public/articles/{article.slug}/ 并在保存时提交；也可直接填写图片/视频链接。</p>
        <div className={styles.mediaGrid}>
          {(article.media || []).map((m, i) => (
            <div className={styles.mediaItem} key={m.src + i}>
              <span className={styles.badge}>{m.kind === "video" ? "视频" : "图片"}</span>
              {m.kind === "video" ? (
                <video src={m.src} muted controls preload="metadata" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.src} alt={m.alt || ""} />
              )}
              <div className={styles.meta}>{m.alt || m.src.split("/").pop()}</div>
              <button className={styles.remove} onClick={() => onRemoveCommitted(i)}>
                删除
              </button>
            </div>
          ))}
          {pending.map((m) => (
            <div className={styles.mediaItem} key={m.id}>
              <span className={styles.badge}>{m.kind === "video" ? "视频" : "图片"}</span>
              {m.kind === "video" ? <video src={m.url} muted controls preload="metadata" /> : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.url} alt={m.alt} />
              )}
              <div className={styles.meta}>{m.filename}</div>
              <span className={styles.pending}>待上传</span>
              <button className={styles.remove} onClick={() => onRemovePending(m.id)}>
                移除
              </button>
            </div>
          ))}
        </div>

        <div className={styles.divider} />
        <div className={styles.row} style={{ alignItems: "flex-end" }}>
          <div className={styles.field}>
            <label className={styles.label}>上传图片 / 视频文件</label>
            <input className={styles.input} type="file" accept="image/*,video/*" onChange={(e) => { if (e.target.files?.[0]) onAddFile(e.target.files[0]); e.target.value = ""; }} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>或添加链接</label>
            <div style={{ display: "flex", gap: 8 }}>
              <select className={styles.select} style={{ width: 96 }} value={urlKind} onChange={(e) => setUrlKind(e.target.value as any)}>
                <option value="image">图片</option>
                <option value="video">视频</option>
              </select>
              <input className={styles.input} placeholder="https://…" value={urlSrc} onChange={(e) => setUrlSrc(e.target.value)} />
            </div>
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>链接说明文字（alt）</label>
          <input
            className={styles.input}
            value={urlAlt}
            onChange={(e) => setUrlAlt(e.target.value)}
            placeholder="选填"
          />
        </div>
        <button
          className={`${styles.btn} ${styles.btnGhost}`}
          onClick={() => {
            onAddUrl(urlKind, urlSrc, urlAlt);
            setUrlSrc("");
            setUrlAlt("");
          }}
        >
          添加链接媒体
        </button>
      </div>

      {!isNew && (
        <button className={`${styles.btn} ${styles.btnDanger}`} onClick={onDelete}>
          删除这篇文章
        </button>
      )}
    </>
  );
}

type StatsData = {
  total: number;
  unique: number;
  range: number;
  daily: { day: string; c: number }[];
  regions: { country: string; region: string; city: string; c: number }[];
  paths: { path: string; c: number }[];
  referrers: { referrer: string; c: number }[];
  recent: { ts: number; ip: string; country: string; region: string; city: string; path: string; referrer: string }[];
};

function StatsViewer() {
  const [token, setToken] = useState<string>(() => sessionStorage.getItem("stats_token") || "");
  const [range, setRange] = useState<number>(14);
  const [data, setData] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    if (!isStatsConfigured()) {
      setError("后端尚未配置：请先部署 worker 并把 src/lib/stats-config.ts 的 STATS_ENDPOINT 改成真实地址。");
      return;
    }
    if (!token) {
      setError("请先输入统计访问令牌（部署 Worker 时设置的 ADMIN_TOKEN）。");
      return;
    }
    sessionStorage.setItem("stats_token", token);
    setLoading(true);
    setError(null);
    try {
      const endpoint = STATS_ENDPOINT.replace(/\/$/, "");
      const res = await fetch(`${endpoint}/api/stats?range=${range}`, {
        headers: { "x-stats-token": token },
      });
      if (res.status === 401) {
        setError("令牌不正确（401）。请确认输入的是部署 Worker 时设置的 ADMIN_TOKEN。");
        setData(null);
        return;
      }
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      setData(await res.json());
    } catch (e: any) {
      setError("加载失败：" + (e?.message || String(e)));
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className={styles.card}>
        <h2>访问统计</h2>
        <p className={styles.hint}>
          访客 IP 与所在地区由 Cloudflare 边缘采集，访问时间/次数由后端聚合。数据仅站长可见，需输入部署 Worker 时设置的访问令牌。
        </p>
        <div className={styles.row} style={{ alignItems: "flex-end" }}>
          <div className={styles.field} style={{ flex: 1 }}>
            <label className={styles.label}>统计访问令牌 (ADMIN_TOKEN)</label>
            <input
              className={styles.input}
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="部署 Worker 时 wrangler secret put ADMIN_TOKEN 的值"
            />
          </div>
          <div className={styles.field} style={{ width: 140 }}>
            <label className={styles.label}>统计区间</label>
            <select className={styles.select} value={range} onChange={(e) => setRange(parseInt(e.target.value, 10))}>
              <option value={7}>近 7 天</option>
              <option value={14}>近 14 天</option>
              <option value={30}>近 30 天</option>
              <option value={90}>近 90 天</option>
            </select>
          </div>
          <button className={styles.btn} disabled={loading} onClick={load}>
            {loading ? "加载中…" : "查询"}
          </button>
        </div>
        {error && <div className={`${styles.status} ${styles.err}`} style={{ marginTop: 12 }}>{error}</div>}
      </div>

      {data && (
        <>
          <div className={styles.card}>
            <h2>概览</h2>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Stat label="总访问次数" value={data.total.toLocaleString()} />
              <Stat label="独立访客 IP" value={data.unique.toLocaleString()} />
              <Stat label="统计区间" value={`近 ${data.range} 天`} />
            </div>
          </div>

          <div className={styles.card}>
            <h2>每日访问量</h2>
            <DailyChart daily={data.daily} />
          </div>

          <div className={styles.card}>
            <h2>访客地区分布（国家 / 省 / 城市）</h2>
            <RankTable rows={data.regions.map((r) => ({ name: [r.country, r.region, r.city].filter(Boolean).join(" / ") || "(未知)", c: r.c }))} />
          </div>

          <div className={styles.card}>
            <h2>热门页面</h2>
            <RankTable rows={data.paths.map((p) => ({ name: p.path || "/", c: p.c }))} />
          </div>

          <div className={styles.card}>
            <h2>访问来源</h2>
            <RankTable rows={data.referrers.map((r) => ({ name: r.referrer || "(直接访问)", c: r.c }))} maxLen={64} />
          </div>

          <div className={styles.card}>
            <h2>最近访客（最近 {data.recent.length} 条）</h2>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>时间</th>
                    <th>IP</th>
                    <th>地区</th>
                    <th>页面</th>
                    <th>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent.map((v, i) => (
                    <tr key={i}>
                      <td>{fmtTime(v.ts)}</td>
                      <td>{v.ip || "(未知)"}</td>
                      <td>{([v.country, v.region, v.city].filter(Boolean).join(" / ") || "(未知)")}</td>
                      <td>{v.path || "/"}</td>
                      <td style={{ maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.referrer || "(直接)"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ flex: "1 1 160px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, padding: "14px 16px" }}>
      <div style={{ fontSize: 13, color: "#8b949e" }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 700, marginTop: 4 }}>{value}</div>
    </div>
  );
}

function RankTable({ rows, maxLen = 48 }: { rows: { name: string; c: number }[]; maxLen?: number }) {
  const max = Math.max(1, ...rows.map((r) => r.c));
  if (!rows.length) return <p className={styles.hint}>暂无数据。</p>;
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: 40 }}>#</th>
            <th>名称</th>
            <th style={{ width: 90 }}>次数</th>
            <th style={{ width: 160 }}>占比</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td style={{ maxWidth: 360, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {r.name.length > maxLen ? r.name.slice(0, maxLen) + "…" : r.name}
              </td>
              <td>{r.c.toLocaleString()}</td>
              <td>
                <div style={{ background: "#21262d", borderRadius: 4, height: 8, width: "100%" }}>
                  <div style={{ background: "#58a6ff", height: 8, width: `${(r.c / max) * 100}%`, borderRadius: 4 }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DailyChart({ daily }: { daily: { day: string; c: number }[] }) {
  if (!daily.length) return <p className={styles.hint}>暂无数据。</p>;
  const chrono = [...daily].reverse(); // 升序：旧→新
  const max = Math.max(1, ...chrono.map((d) => d.c));
  const W = 640;
  const H = 200;
  const pad = 28;
  const n = chrono.length;
  const gap = 6;
  const bw = Math.max(6, (W - pad * 2 - gap * (n - 1)) / n);
  const totalW = bw * n + gap * (n - 1);
  const offsetX = pad + Math.max(0, (W - pad * 2 - totalW) / 2);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W, display: "block" }} role="img" aria-label="每日访问量">
      <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="#30363d" />
      {chrono.map((d, i) => {
        const h = ((d.c / max) * (H - pad * 2));
        const x = offsetX + i * (bw + gap);
        const y = H - pad - h;
        const showLabel = n <= 16 || i % Math.ceil(n / 12) === 0;
        return (
          <g key={d.day}>
            <rect x={x} y={y} width={bw} height={Math.max(1, h)} fill="#58a6ff" rx={2}>
              <title>{`${d.day}：${d.c} 次`}</title>
            </rect>
            {showLabel && (
              <text x={x + bw / 2} y={H - pad + 12} fill="#8b949e" fontSize={9} textAnchor="middle">
                {d.day.slice(5)}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function fmtTime(ts: number): string {
  const d = new Date(ts);
  const p = (x: number) => String(x).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}
