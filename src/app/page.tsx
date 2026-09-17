import Link from "next/link";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import { columns, entries, site } from "@/content/articles";
export default function Home() {
  const hero = site.hero;
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap editorial-hero">
          <div className="hero-top">
            <span className="eyebrow">{hero.eyebrow}</span>
            <span className="edition">{hero.edition}</span>
          </div>
          <h1>
            {hero.titleLine1}
            <br />
            <span className="accent">{hero.titleAccent}</span>
          </h1>
          <div className="hero-bottom">
            <p>
              {hero.subtitle.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < hero.subtitle.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
            <a className="button" href="#research">
              {hero.button} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="column-jumps">
            {columns.map((c, i) => (
              <a href={`#${c.id}`} key={c.id}>
                <span className="eyebrow">0{i + 1}</span>
                <strong>{c.title}</strong>
                <span>{entries.filter((e) => e.category === c.id).length} 篇 ↗</span>
              </a>
            ))}
          </div>
        </section>
        {columns.map((c, ci) => {
          const titleOnly = c.id === "research" || c.id === "essays";
          return (
            <section
              id={c.id}
              key={c.id}
              className={`section archive-section ${ci === 1 ? "essay-section" : "light"}`}
            >
              <div className="wrap">
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">
                      0{ci + 1} / {c.english}
                    </span>
                    <h2>{c.title}</h2>
                  </div>
                  <span className="small-label">
                    {String(entries.filter((e) => e.category === c.id).length).padStart(2, "0")} 篇记录
                  </span>
                </div>
                <p className="section-intro">{c.intro}</p>
                <div className="projects">
                  {entries
                    .filter((e) => e.category === c.id)
                    .map((e, i) => (
                      <Link
                        href={e.href}
                        className={`project-row archive-row${titleOnly ? " title-only" : ""}`}
                        key={e.slug}
                      >
                        <span className="project-number">{String(i + 1).padStart(2, "0")}</span>
                        <div className="project-text">
                          {titleOnly ? (
                            <h3>{e.title}</h3>
                          ) : (
                            <>
                              <div className="project-meta">
                                <span>{e.kind}</span>
                                {e.minutes > 0 && <span>约 {e.minutes} 分钟</span>}
                              </div>
                              <h3>{e.title}</h3>
                              <p>{e.summary}</p>
                            </>
                          )}
                        </div>
                        <span className="project-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <footer className="footer wrap">
        <span>
          © {new Date().getFullYear()} {site.footer.main}
        </span>
        <span>{site.footer.right}</span>
        <a href="/admin/">管理后台 ↗</a>
      </footer>
      <BackToTop />
    </>
  );
}
