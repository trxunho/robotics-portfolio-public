import data from "./articles.json";
import { projects } from "./portfolio";
export const articles = data;
export const columns = [
  { id: "research", title: "行业调研", english: "INDUSTRY RESEARCH", intro: "观察产业脉络，梳理技术路径。在具体问题里，寻找判断的依据。" },
  { id: "essays", title: "思想随笔", english: "NOTES & REFLECTIONS", intro: "记录尚在生长的想法。关于需求、产品，以及技术与人的关系。" },
  { id: "visions", title: "立象尽意", english: "IDEAS IN FORM", intro: "让想象有形，让想法可见。从生活场景到三维交互，探索机器人的更多可能。" },
];
export const entries = [
  ...articles.map(a => ({ ...a, href: `/articles/${a.slug}`, kind: a.category === "visions" ? "场景影像" : "文章" })),
  ...projects.filter(p => p.demoUrl).map(p => ({ ...p, category: "visions", href: `/projects/${p.slug}`, kind: "3D 交互", minutes: 0, media: [] })),
];
