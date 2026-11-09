---
publishDate: 2026-08-24T00:00:00Z
author: AstroWind 中文站
title: 从零开始：用 AstroWind 搭一个中文网站
excerpt: 一条命令创建项目，认识目录结构，改掉站点信息与首页文案，写下第一篇文章，最后构建并部署到静态托管。
image: https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
imageAlt: 楼梯下的两个人，象征从第一步开始
category: 教程
tags:
  - astro
  - tailwind css
  - 入门
---

**AstroWind** 是 [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) 的免费开源模板。它给你一套完整的营销站骨架：首页、博客、页头页脚、暗色模式、图片优化和 SEO 元信息，全部由带类型的组件拼成。这篇指南带你从空目录走到可部署的静态站点。

## 准备环境

- **Node.js 22.22.3 或更高**。`package.json` 的 `engines` 写了最低版本，`.nvmrc` 固定了版本号。
- 一个终端与编辑器。VS Code 装 Astro 扩展后，`.astro` 文件里有高亮和补全。
- 想要一键部署的话，再准备一个 GitHub 账号。

## 创建项目

Astro CLI 可以直接从任意 GitHub 仓库生成项目：

```shell
npm create astro@latest -- --template arthelokyo/astrowind
```

按提示填写项目目录、是否安装依赖、是否初始化 Git，然后启动：

```shell
cd my-site
npm run dev
```

打开 `http://localhost:4321`，看到的演示站就是你自己的代码了。如果你习惯用 bun，把安装与脚本换成 `bun install`、`bun run dev` 即可；注意 `check` 与 `fix` 两个脚本内部写死了 `npm run ...`。

## 目录里都有什么

| 路径                                | 作用                                        |
| ----------------------------------- | ------------------------------------------- |
| `src/pages/`                        | 一个文件对应一条路由，`index.astro` 是首页  |
| `src/components/widgets/`           | 页面区块：Hero、特性、价格、FAQ、评价等     |
| `src/data/post/`                    | Markdown / MDX 文章                         |
| `src/config.yaml`                   | 站点名、URL、默认 SEO、博客开关、分析、主题 |
| `src/navigation.ts`                 | 顶部菜单、按钮与页脚分组                    |
| `src/components/CustomStyles.astro` | 明暗两套颜色与字体变量                      |
| `src/assets/images/`                | 构建时由 Astro 优化的图片                   |
| `public/`                           | 原样复制的文件：`robots.txt`、headers 等    |

## 换成自己的内容

1. 打开 `src/config.yaml`，把 `site.name`、`site.site`、`metadata.description` 改成你的站点信息。`site.site` 会影响 canonical、sitemap 与结构化数据，部署前一定要换成真实域名。
2. 编辑 `src/navigation.ts`，把演示菜单换成你的栏目。
3. 首页 `src/pages/index.astro` 是一组 widget 的调用，改文案、换顺序、删掉不需要的区块即可。
4. 想调整视觉，看[定制颜色、字体与 Logo](/how-to-customize-astrowind-to-your-brand)。

## 写第一篇文章

在 `src/data/post/` 新建一个 `.md` 文件，`title`、`publishDate`、`excerpt`、`category`、`tags` 写在 frontmatter 里。构建时 `src/content.config.ts` 里的 `glob()` 加载器会读取它，文章自动出现在列表、分类页、标签页、相关文章与 RSS 中：

```md
---
publishDate: 2026-11-09T00:00:00Z
title: 我的第一篇文章
excerpt: 一句话摘要，会显示在列表和 OG 描述里。
category: 教程
tags:
  - astro
---

正文从这里开始。
```

## 构建与部署

```shell
npm run build
npm run preview
```

产物是 `dist/` 目录下的纯静态文件（`output: 'static'`），可以放到 Vercel、Netlify、Cloudflare Workers、GitHub Pages 或任意 nginx 容器。仓库已经备好 `vercel.json`、`netlify.toml`、`wrangler.jsonc` 与 `Dockerfile`。

想更深入理解模板的运作方式，继续读[模板原理拆解](/astrowind-template-in-depth)；想让 AI 帮你改，看[用 AI 助手改造模板](/build-websites-with-ai)。
