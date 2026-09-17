# 使用 WorkBuddy 完整部署个人主页

本项目已经配置为纯静态导出，包含文章、图片、视频以及两个 3D 浏览页面。推荐通过 WorkBuddy 连接腾讯云 EdgeOne Pages；如果需要自主管理服务器，可使用项目内的 Docker 配置部署到腾讯云 Lighthouse。

## 方案一：EdgeOne Pages（推荐）

适合长期公开访问，免维护服务器，并由 CDN 分发静态资源。

在 WorkBuddy 中连接 GitHub 和腾讯云后，把下面这段指令完整发送给 WorkBuddy：

> 克隆 GitHub 仓库 `https://github.com/trxunho/robotics-portfolio.git` 的 `main` 分支。不要改动网页内容。执行 `npm ci` 和 `npm run build`，确认 `out/index.html`、`out/articles`、`out/robot-studio`、`out/l20-studio` 均存在。然后使用腾讯云 EdgeOne Pages 部署：构建命令为 `npm run build`，输出目录为 `out`，Node.js 版本为 20。部署完成后检查首页、任意一篇行业调研文章、一个视频页面，以及两个 3D 页面均返回 200，并把正式访问地址和项目控制台地址发给我。

构建配置：

| 配置项 | 值 |
| --- | --- |
| 框架 | Next.js / Static Export |
| Node.js | 20 |
| 安装命令 | `npm ci` |
| 构建命令 | `npm run build` |
| 输出目录 | `out` |

## 方案二：腾讯云 Lighthouse + Docker

适合需要固定服务器、独立 Nginx 配置或以后扩展后端服务的情况。推荐先选择中国香港节点，可立即通过公网 IP 或域名访问；若选择中国大陆节点，需先完成 ICP 备案。

服务器最低建议：Ubuntu 22.04、2 核 2 GB、40 GB 磁盘，并放通 TCP 80/443。

发送给 WorkBuddy 的指令：

> 连接我的腾讯云 Lighthouse Ubuntu 服务器。确认目标机已安装 Git、Docker Engine 和 Docker Compose 插件。克隆 `https://github.com/trxunho/robotics-portfolio.git` 到 `/opt/robotics-portfolio`，进入目录后运行 `docker compose up -d --build`。检查容器健康状态，并访问 `/`、`/articles/research-01/`、`/articles/visions-03/`、`/robot-studio/index.html` 和 `/l20-studio/index.html`，确认全部返回 200。不要把任何账号、Token 或密钥写入仓库。完成后告诉我公网访问地址。

首次部署完成后，后续更新只需在服务器项目目录执行：

```bash
sh deploy/update.sh
```

## 域名与 HTTPS

EdgeOne Pages 可在控制台直接绑定域名并启用 HTTPS。Lighthouse 方案可由 WorkBuddy 在确认域名已解析到服务器后安装 Certbot，或将域名接入 EdgeOne/CDN 统一管理证书。

如果服务器位于中国大陆，域名必须先完成 ICP 备案及腾讯云接入备案后再解析上线。香港节点不要求 ICP 备案，但跨境网络质量受运营商线路影响。
