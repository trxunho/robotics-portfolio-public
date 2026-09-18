/**
 * Portfolio 访客统计后端（Cloudflare Worker + D1）
 *
 * 接口：
 *   POST /api/track   访客埋点上报（由站点前端 sendBeacon 调用，CORS 放开给 GitHub Pages 源）
 *   GET  /api/stats   聚合统计，需带上 x-stats-token（= 部署时设置的 ADMIN_TOKEN 密钥）才返回
 *
 * 访客真实 IP 与国家/省/城市来自 Cloudflare 边缘请求（request.cf），无需第三方 GeoIP 库。
 */

export interface Env {
  DB: any; // D1Database
  ADMIN_TOKEN: string; // 通过 `wrangler secret put ADMIN_TOKEN` 设置
  ALLOWED_ORIGIN: string; // 允许上报的站点源，部署前在 wrangler.toml [vars] 设置
}

function cors(env: Env): Record<string, string> {
  const origin = env.ALLOWED_ORIGIN || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-stats-token, Authorization",
    Vary: "Origin",
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // 预检
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors(env) });
    }

    // —— 埋点上报 ——
    if (url.pathname === "/api/track" && request.method === "POST") {
      try {
        const body: any = await request.json().catch(() => ({}));

        // 访客真实 IP：Cloudflare 提供 cf-connecting-ip；其它环境回退到 x-forwarded-for
        const ip =
          request.headers.get("cf-connecting-ip") ||
          (request.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() ||
          "";

        // 地区信息由 Cloudflare 边缘注入（request.cf）
        const cf: any = (request as any).cf || {};
        const country = cf.country || "";
        const region = cf.region || cf.regionCode || "";
        const city = cf.city || "";

        const path = String(body.path || "/").slice(0, 512);
        const referrer = String(body.referrer || "").slice(0, 1024);
        const ua = String(body.ua || "").slice(0, 512);

        await env.DB.prepare(
          "INSERT INTO visits (ts, ip, country, region, city, path, referrer, ua) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        )
          .bind(Date.now(), ip, country, region, city, path, referrer, ua)
          .run();

        return new Response(null, { status: 204, headers: cors(env) });
      } catch (e: any) {
        return json({ error: String(e?.message || e) }, 500, cors(env));
      }
    }

    // —— 统计查询（需鉴权）——
    if (url.pathname === "/api/stats" && request.method === "GET") {
      const token =
        request.headers.get("x-stats-token") || url.searchParams.get("key") || "";
      if (!env.ADMIN_TOKEN || token !== env.ADMIN_TOKEN) {
        return json({ error: "unauthorized" }, 401, cors(env));
      }

      const range = Math.min(Math.max(parseInt(url.searchParams.get("range") || "14", 10) || 14, 1), 90);

      try {
        const [total, uniq, daily, regions, paths, referrers, recent] = await Promise.all([
          env.DB.prepare("SELECT COUNT(*) c FROM visits").first(),
          env.DB.prepare("SELECT COUNT(DISTINCT ip) c FROM visits").first(),
          // 按「天」聚合（东八区），取最近 range 天
          env.DB.prepare(
            "SELECT substr(date(ts/1000,'unixepoch','+8 hours'),1,10) day, COUNT(*) c FROM visits GROUP BY day ORDER BY day DESC LIMIT ?"
          ).bind(range).all(),
          env.DB.prepare(
            "SELECT country, region, city, COUNT(*) c FROM visits GROUP BY country, region, city ORDER BY c DESC LIMIT 15"
          ).all(),
          env.DB.prepare(
            "SELECT path, COUNT(*) c FROM visits GROUP BY path ORDER BY c DESC LIMIT 15"
          ).all(),
          env.DB.prepare(
            "SELECT CASE WHEN referrer='' OR referrer IS NULL THEN '(直接访问)' ELSE referrer END referrer, COUNT(*) c FROM visits GROUP BY referrer ORDER BY c DESC LIMIT 15"
          ).all(),
          env.DB.prepare(
            "SELECT ts, ip, country, region, city, path, referrer FROM visits ORDER BY ts DESC LIMIT 80"
          ).all(),
        ]);

        const payload = {
          total: total?.c || 0,
          unique: uniq?.c || 0,
          range,
          daily: daily.results,
          regions: regions.results,
          paths: paths.results,
          referrers: referrers.results,
          recent: recent.results,
          generatedAt: Date.now(),
        };
        return json(payload, 200, cors(env));
      } catch (e: any) {
        return json({ error: String(e?.message || e) }, 500, cors(env));
      }
    }

    return new Response("Not found", { status: 404 });
  },
};

function json(data: any, status: number, extra: Record<string, string>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...extra },
  });
}
