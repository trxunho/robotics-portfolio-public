import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="wrap not-found">
      <span className="eyebrow">404 / NOT FOUND</span>
      <h1>
        这份档案
        <br />
        还没有收录。
      </h1>
      <p>页面可能已移动，或链接地址有误。</p>
      <Link href="/" className="button">
        返回首页 ↗
      </Link>
    </main>
  );
}
