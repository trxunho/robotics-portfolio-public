"use client";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" id="top">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="个人作品集首页">
          P<span className="accent">.</span>
          <span className="brand-caption">谭荣昕的个人主页</span>
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
          <Link onClick={() => setOpen(false)} href="/#research">
            行业调研
          </Link>
          <Link onClick={() => setOpen(false)} href="/#essays">
            思想随笔
          </Link>
          <Link onClick={() => setOpen(false)} href="/#visions">
            立象尽意
          </Link>
        </nav>
      </div>
    </header>
  );
}
