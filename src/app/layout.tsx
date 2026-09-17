import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "个人主页 | 行业调研 · 思想随笔 · 立象尽意",
    template: "%s | 个人作品集",
  },
  description:
    "关于机器人、技术与生活的个人记录：行业调研、思想随笔、立象尽意。阅读文章，浏览场景影像，探索三维交互作品。",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <a href="#main" className="skip-link">
          跳转到主要内容
        </a>
        {children}
      </body>
    </html>
  );
}
