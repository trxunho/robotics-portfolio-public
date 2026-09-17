"use client";
import Link from "next/link";
import { useState } from "react";
import { columns, site } from "@/content/articles";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" id="top">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="个人作品集首页">
          P<span className="accent">.</span>
          <span className="brand-caption">{site.brand}</span>
        </Link>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "关闭" : "菜单"}
        </button>
        <nav
          id="navigation"
          className={open ? "nav is-open" : "nav"}
          aria-label="主导航"
        >
          {columns.map((c) => (
            <Link key={c.id} onClick={() => setOpen(false)} href={`/#${c.id}`}>
              {c.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
