import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import { projects } from "@/content/portfolio";
import { entries } from "@/content/articles";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return { title: p ? `${p.title} · ${p.demoUrl ? "交互原型" : "选题草案"}` : "项目未找到" };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const visions = entries.filter(e => e.category === "visions");
  const columnIndex = visions.findIndex(e => e.slug === slug);
  const next = visions[(columnIndex + 1) % visions.length];
  return (
    <>
      <Header />
      <main id="main">
        <section className="wrap detail-hero">
          <Link className="back-link" href="/#visions">
            ← 返回立象尽意
          </Link>
          <div className="project-meta">
            <span>{p.category}</span>
            <span className="status">{p.statusLabel || (p.demoUrl ? "可交互原型 · 概念设计" : "选题草案 · 尚未展示实作成果")}</span>
          </div>
          <h1>{p.title}</h1>
          <p className="detail-summary">{p.summary}</p>
          {p.demoUrl && (
            <div className="demo-actions">
              <a className="button" href="#interactive">体验三维模型 <span aria-hidden="true">↓</span></a>
              <a className="text-link" href={p.demoUrl} target="_blank" rel="noreferrer">独立窗口打开 ↗</a>
            </div>
          )}
        </section>
        {p.demoUrl && (
          <section className="demo-section wrap" id="interactive" aria-label={`${p.title}交互演示`}>
            <div className="demo-heading">
              <span className="eyebrow">INTERACTIVE / {p.demoLabel || "A4 ROBOT STUDIO"}</span>
              <a href={p.demoUrl} target="_blank" rel="noreferrer">独立窗口 / 全屏体验 ↗</a>
            </div>
            <iframe className="robot-demo" src={p.demoUrl} title={`${p.title}：可旋转、拆解和透视的三维模型`} allow="fullscreen" allowFullScreen loading="lazy" />
            <p className="demo-caption">{p.demoCaption || "拖动旋转，滚轮缩放；选择系统查看内部设备，或使用底部滑杆拆解模型。"}</p>
          </section>
        )}
        <section className="light section">
          <div className="wrap detail-grid">
            <aside>
              <span className="eyebrow">立象尽意 / {String(columnIndex + 1).padStart(2, "0")}</span>
              <p>{p.demoUrl ? "三维交互网页已上线" : "项目资料正在整理"}</p>
              <p className="detail-note">
                {p.modelNote || (p.demoUrl ? "外观依据设定图近似重建，内部设备为概念补充。此作品展示数字原型，不代表已制造或经过工程验证的实体机器人。" : "本页为项目选题与内容框架，不代表已完成项目。实物、代码、个人职责及测试结果将在资料确认后更新。")}
              </p>
            </aside>
            <div className="detail-content">
              <article>
                <span className="eyebrow">01 / QUESTION</span>
                <h2>{p.demoUrl ? "设计问题" : "准备探索的问题"}</h2>
                <p>{p.question}</p>
              </article>
              <article>
                <span className="eyebrow">02 / CONCEPT</span>
                <h2>{p.demoUrl ? "实现方法" : "初步思路"}</h2>
                <p>{p.concept}</p>
              </article>
              <article>
                <span className="eyebrow">03 / DOCUMENTATION</span>
                <h2>{p.demoUrl ? "可以探索的内容" : "后续呈现的内容"}</h2>
                <ul>
                  {p.evidence.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </article>
              <div className="materials-note">
                {p.materialsNote || (p.demoUrl ? "外观曲面、织物和收纳姿态作了简化；内部电机、计算与供电系统未作真实硬件选型、尺寸或性能验证。原始设定图可在演示的“设计档案”中查看。" : "演示视频、图片与测试数据将在真实素材就绪后加入。")}
              </div>
            </div>
          </div>
        </section>
        <div className="wrap next-project">
          <span className="eyebrow">立象尽意 / 下一篇</span>
          <Link href={next.href}>
            {next.title}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
      <footer className="footer wrap">
        <Link href="/">个人作品集</Link>
        <Link href="/#visions">返回立象尽意 ↗</Link>
      </footer>
    </>
  );
}
