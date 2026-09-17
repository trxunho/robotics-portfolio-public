"use client";
export default function BackToTop() {
  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="回到顶端"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
