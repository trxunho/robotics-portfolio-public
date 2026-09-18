import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import VisitorTracker from "@/components/visitor-tracker";
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
        <VisitorTracker />
        {/* 访客计数（VerCount，不蒜子兼容替代，零配置、无需后端）。
            全局加载即统计全站 PV/UV，不暴露访客 IP，仅给总数。
            注：不蒜子官方后端长期不稳定，故改用兼容的 VerCount。 */}
        <Script
          src="https://events.vercount.one/js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
