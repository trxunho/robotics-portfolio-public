# 访客统计后端（Cloudflare Worker + D1）

为纯静态站点 `trxunho.github.io` 提供「访问时间/次数」与「访客 IP 所在地区」统计。
前端埋点已在站点源码中（`src/components/visitor-tracker.tsx`），本目录是接收与统计的后端。

> 为什么用 Cloudflare：GitHub Pages 是纯静态托管，无法在服务端拿到访客 IP。
> Cloudflare Worker 的边缘请求原生提供真实 `cf-connecting-ip` 与国家/省/城市（`request.cf`），
> 免费额度对个人作品集足够（D1 免费版：每天 500 万次读、10 万次写）。

## 部署步骤（只需做一次）

1. 安装并登录 Wrangler（需要免费的 Cloudflare 账号）：
   ```bash
   npm install -g wrangler
   wrangler login
   ```
2. 创建 D1 数据库，记下返回的 `database_id`：
   ```bash
   wrangler d1 create portfolio-visits
   ```
3. 把上一步的 `database_id` 填进 `wrangler.toml` 的 `database_id` 字段。
4. 初始化数据表：
   ```bash
   wrangler d1 execute portfolio-visits --file=./schema.sql --remote
   ```
5. 设置一个只有你自己知道的统计访问令牌（后台查看统计时要填这个）：
   ```bash
   wrangler secret put ADMIN_TOKEN
   # 提示输入时，随便 paste 一段足够随机的字符串，例如：
   #   openssl rand -hex 24
   ```
6. 确认 `wrangler.toml` 里的 `ALLOWED_ORIGIN` 是 `https://trxunho.github.io`（已默认填好）。
7. 部署：
   ```bash
   wrangler deploy
   ```
   部署成功会输出 Worker 地址，形如 `https://portfolio-visits.<子域>.workers.dev`。

## 让站点前端指向这个后端

把上面拿到的 Worker 地址（**不含末尾斜杠**）填进站点源码：

- 文件：`src/lib/stats-config.ts`
- 把 `STATS_ENDPOINT` 的占位值改成真实地址，然后提交+推送（GitHub Actions 会自动重新构建部署）。

部署完成、且 `STATS_ENDPOINT` 已填写后，访客数据即开始入库；
打开站点 `/admin` → 「📊 访问统计」，输入第 5 步设置的 `ADMIN_TOKEN` 即可查看。

## 隐私说明

本后端会记录访客真实 IP 及所在地区用于站长自查。若站点面向欧盟访客，请自行评估 GDPR 合规
（例如只对 IP 取前两段、或定期清理 `visits` 表）。`ADMIN_TOKEN` 仅用于保护统计读取接口，不写进前端代码。
