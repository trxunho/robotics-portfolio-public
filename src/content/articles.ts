import data from "./articles.json";
import siteData from "./site.json";
import { projects } from "./portfolio";

export const site = siteData;
export const articles = data;
export const columns = site.columns;
export const entries = [
  ...articles.map((a) => ({ ...a, href: `/articles/${a.slug}`, kind: a.category === "visions" ? "场景影像" : "文章" })),
  ...projects.filter((p) => p.demoUrl).map((p) => ({ ...p, category: "visions", href: `/projects/${p.slug}`, kind: "3D 交互", minutes: 0, media: [] })),
];
