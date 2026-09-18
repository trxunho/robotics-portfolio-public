"use client";

import { useEffect } from "react";
import { STATS_ENDPOINT, isStatsConfigured } from "@/lib/stats-config";

/**
 * 访客埋点组件。
 * 在每次页面加载（含直接的整页访问）以及 SPA 客户端路由切换时各上报一条。
 * 未配置后端时自动空转，不产生任何请求。
 */
export default function VisitorTracker() {
  useEffect(() => {
    if (!isStatsConfigured()) return;

    const endpoint = STATS_ENDPOINT.replace(/\/$/, "");

    const send = () => {
      try {
        const payload = {
          path: window.location.pathname,
          referrer: document.referrer || "",
          ua: navigator.userAgent,
          title: document.title,
        };
        const body = JSON.stringify(payload);
        const url = `${endpoint}/api/track`;
        if (navigator.sendBeacon) {
          // sendBeacon 在页面卸载时也能可靠送达
          navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
        } else {
          fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body,
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        // 上报失败不应影响页面
      }
    };

    send();

    // 监听 SPA 客户端路由切换（Next 静态导出下 Link 导航不刷新整页）
    const originalPush = window.history.pushState;
    const wrappedPush = function (...args: any[]) {
      const result = originalPush.apply(window.history, args as any);
      send();
      return result;
    };
    window.history.pushState = wrappedPush as typeof window.history.pushState;
    window.addEventListener("popstate", send);

    return () => {
      window.history.pushState = originalPush;
      window.removeEventListener("popstate", send);
    };
  }, []);

  return null;
}
