// 访客统计后端地址（Cloudflare Worker）。
// 部署 Worker 后，把下面占位值改成它的真实地址（不含末尾斜杠），
// 例如：https://portfolio-visits.xxxx.workers.dev
// 在改好并提交之前，埋点组件会自动跳过、不做任何网络请求，站点也不会报错。
export const STATS_ENDPOINT = "https://<your-worker>.workers.dev";

// 判断后端是否已配置（占位值未替换时视为未配置）
export function isStatsConfigured(): boolean {
  return !!STATS_ENDPOINT && !STATS_ENDPOINT.includes("<");
}
