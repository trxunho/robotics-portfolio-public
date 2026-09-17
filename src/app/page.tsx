import Link from "next/link";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import { columns, entries } from "@/content/articles";
export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero wrap editorial-hero">
        <div className="hero-top"><span className="eyebrow">OBSERVE / REFLECT / CREATE</span><span className="edition">谭荣昕 · 思考与实践</span></div>
        <h1>观其变，思其理。<br /><span className="accent">立象以尽意。</span></h1>
        <div className="hero-bottom"><p>关于机器人、技术与生活的个人记录。<br />从行业观察出发，让思考落在具体的形象里。</p><a className="button" href="#research">开始阅读 <span aria-hidden="true">↓</span></a></div>
        <div className="column-jumps">{columns.map((c, i) => <a href={`#${c.id}`} key={c.id}><span className="eyebrow">0{i + 1}</span><strong>{c.title}</strong><span>{entries.filter(e => e.category === c.id).length} 篇 ↗</span></a>)}</div>
      </section>
      {columns.map((c, ci) => {
        const titleOnly = c.id === "research" || c.id === "essays";
        return (<section id={c.id} key={c.id} className={`section archive-section ${ci === 1 ? "essay-section" : "light"}`}>
          <div className="wrap">
            <div className="section-heading"><div><span className="eyebrow">0{ci + 1} / {c.english}</span><h2>{c.title}</h2></div><span className="small-label">{String(entries.filter(e => e.category === c.id).length).padStart(2, "0")} 篇记录</span></div>
            <p className="section-intro">{c.intro}</p>
            <div className="projects">{entries.filter(e => e.category === c.id).map((e, i) => <Link href={e.href} className={`project-row archive-row${titleOnly ? " title-only" : ""}`} key={e.slug}>
              <span className="project-number">{String(i + 1).padStart(2, "0")}</span>
              <div className="project-text">{titleOnly
                ? <h3>{e.title}</h3>
                : <><div className="project-meta"><span>{e.kind}</span>{e.minutes > 0 && <span>约 {e.minutes} 分钟</span>}</div><h3>{e.title}</h3><p>{e.summary}</p></>}
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </Link>)}
            </div>
          </div>
        </section>);
      })}
    </main>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} 个人主页</span><span>观察 · 思考 · 实践</span><a href="#top">返回顶部 ↑</a></footer>
    <BackToTop />
  </>;
}
