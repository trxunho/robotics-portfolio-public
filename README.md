# 个人机器人作品集

线上地址：https://robotics-portfolio-henna.vercel.app

私有源码仓库：https://github.com/trxunho/robotics-portfolio

Vercel 项目：https://vercel.com/trx12/robotics-portfolio

Next.js App Router + TypeScript + Tailwind CSS，部署到 Vercel。
运行：npm install，然后 npm run dev。
检查：npm run lint 和 npm run build。

## 内容维护

src/content/portfolio.ts：个人信息、公开邮箱、简历地址及项目内容。
src/app/page.tsx：首页。
src/app/projects/[slug]/page.tsx：详情模板。
src/app/globals.css：响应式样式。

“项目档案”的前两项为 A4 家用机器人与灵心巧手 L20 交互原型。A4，详情页 `/projects/a4-household-robot` 内嵌三维演示；独立演示位于 `/robot-studio/index.html`。其他五项仍为选题草案，不能作为已完成经历。

三维演示随本站一起部署，不依赖 ChatGPT Sites 登录。更新模型后，在本项目运行 `node scripts/sync-robot-studio.mjs`，默认读取同级 `a4-robot-studio` 源码项目，也可传入源码目录。该源码项目需先安装其自身依赖。生成的 `public/robot-studio` 静态文件纳入版本控制，Vercel 正常执行本站 `npm run build` 即可。模型原始源码保持在独立项目，已有的 ChatGPT Sites 版本不受本站部署影响。

真实资料到位后，更新内容以及首页和详情页的状态标记。图片、视频封面和简历放入 public。
当前 noindex 防止资料未完成时被搜索引擎收录，资料确认后再在 layout.tsx 中开放。
部署不需要数据库、环境变量或第三方字体服务。
不提交 .vercel、环境变量文件或令牌。

L20 详情页为 /projects/linker-hand-l20，独立演示位于 /l20-studio/index.html，与 A4 放在同一栏目。更新 L20 后运行 node scripts/sync-l20-studio.mjs，默认读取同级 l20-hand-studio 项目，生成的 public/l20-studio 随本站部署。L20 的官方资产来源与几何边界使用独立说明，不沿用 A4 的概念模型声明。
