# 🚀 AstroWind

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/assets/lighthouse-dark.svg">
  <img src=".github/assets/lighthouse-light.svg" align="right" alt="Lighthouse 得分：性能 100、无障碍性 100、最佳实践 100、SEO 100" width="100" height="358">
</picture>

🌟 _2022、2023、2024 与 2025 年 **星标**与 **Fork** 数最多的 Astro 主题_。🌟

**AstroWind** 是一个免费开源的网站模板，用 **[Astro v7](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/)** 构建站点。开箱即可启动新项目，设计上充分遵循 Web 最佳实践。

- ✅ 在 **PageSpeed Insights** 报告中取得**可用于生产环境**的评分。
- ✅ **30+ 页面区块组件**（首屏 Hero、特性、Bento、选项卡、带对比表的定价、FAQ 手风琴、用户评价、团队、时间线、画廊、项目、倒计时、订阅表单……），均带类型定义、可自由组合。
- ✅ 集成 **Tailwind CSS v4**，支持**深色模式**与 **_RTL_**。
- ✅ **快速且对 SEO 友好的博客**：自动生成 **RSS feed**、支持 **MDX**、**分类与标签**、**社交分享**……
- ✅ **图片优化**（使用全新的 **Astro Assets**，以及面向通用图片 CDN 的 **Unpic**）。
- ✅ 基于你的路由生成**项目站点地图**。
- ✅ 提供用于社交媒体分享的 **Open Graph 标签**。
- ✅ **网站分析**：内置 Google Analytics 集成。
- ✅ **兼容 shadcn/ui 的设计令牌**（`bg-background`、`text-foreground`、`border-border`……），由主题变量派生。
- ✅ **面向 AI 就绪**：附带 `AGENTS.md` 以及 `.agents/skills/` 中的分步技能指南，供 Claude Code、Codex、Cursor 等 AI 编码 Agent 使用。

<br>

![AstroWind 主题截图](https://raw.githubusercontent.com/arthelokyo/.github/main/resources/astrowind/screenshot-astrowind-readme-def-v1.png)

[![arthelokyo](https://custom-icon-badges.demolab.com/badge/made%20by%20-arthelokyo-556bf2?style=flat-square&logo=arthelokyo&logoColor=white&labelColor=101827)](https://arthelokyo.com)
[![License](https://img.shields.io/github/license/arthelokyo/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/arthelokyo/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/arthelokyo)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/arthelokyo/astrowind#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/arthelokyo/astrowind/badge.svg?style=flat-square)](https://snyk.io/test/github/arthelokyo/astrowind)
[![Stars](https://img.shields.io/github/stars/arthelokyo/astrowind.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/arthelokyo/astrowind)
[![Forks](https://img.shields.io/github/forks/arthelokyo/astrowind.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/arthelokyo/astrowind)

<br>

<details open>
<summary>目录</summary>

- [演示](#演示)
- [TL;DR](#tldr)
- [开始使用](#开始使用)
  - [项目结构](#项目结构)
  - [命令](#命令)
  - [配置](#配置)
  - [部署](#部署)
- [常见问题](#常见问题)
- [参与贡献](#参与贡献)
- [致谢](#致谢)
- [许可](#许可)
- [本仓库的 Bun 语境](#本仓库的-bun-语境)

</details>

<br>

## 演示

📌 [https://astrowind.vercel.app/](https://astrowind.vercel.app/)

<br>

## TL;DR

```shell
npm create astro@latest -- --template arthelokyo/astrowind
```

## 开始使用

**AstroWind** 让你能够快速上手，用 [Astro v7](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/) 创建网站。这是一款免费主题，专注于简洁、良好实践与高性能。

模板只使用了极少量的原生 JavaScript，仅用于提供基础功能，以便每位开发者自行决定使用哪个框架（React、Vue、Svelte、Solid JS……）以及如何实现自己的目标。

> **注意：** 需要 **Node.js >= 22.22.3**（见 `.nvmrc`）。模板当前使用 `output: 'static'`，但博客仅在 `prerender = true` 时可用。

### 项目结构

在 **AstroWind** 模板中，你会看到以下目录与文件：

```
/
├── .agents/
│   └── skills/
├── AGENTS.md
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       ├── shadcn.css
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content.config.ts
│   ├── data/
│   │   └── post/
│   │       ├── post-slug-1.md
│   │       ├── post-slug-2.mdx
│   │       └── ...
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.ts
├── package.json
├── astro.config.ts
└── ...
```

Astro 会在 `src/pages/` 目录中查找 `.astro` 或 `.md` 文件。每个页面都会依据其文件名暴露为一个路由。

`src/components/` 并没有什么特殊之处，只是我们习惯把各种 Astro/React/Vue/Svelte/Preact 组件放在这里。

任何静态资源（例如图片），如果不需要做任何转换，可以放在 `public/` 目录；如果是直接导入使用的，则放在 `assets/` 目录。

[![Edit AstroWind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/arthelokyo/astrowind/tree/main) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/arthelokyo/astrowind)

> 🧑‍🚀 **资深宇航员？** 直接删掉这个 `README.md`，改 `src/config.yaml` 和站点内容，玩得开心！

<br>

### 命令

所有命令都在项目根目录的终端中执行：

| 命令                | 作用                                          |
| :------------------ | :-------------------------------------------- |
| `npm install`       | 安装依赖                                      |
| `npm run dev`       | 在 `localhost:4321` 启动本地开发服务器        |
| `npm run build`     | 将生产站点构建到 `./dist/`                    |
| `npm run preview`   | 部署前在本地预览构建结果                      |
| `npm run check`     | 检查项目中的错误                              |
| `npm run fix`       | 运行 ESLint 并用 Prettier 格式化代码          |
| `npm run astro ...` | 运行 `astro add`、`astro preview` 等 CLI 命令 |

<br>

### 配置

基础配置文件：`./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # 例如需要部署到 GitHub Pages 时修改此项
  trailingSlash: false # 生成的永久链接末尾是否带 "/"

  googleSiteVerificationId: false # 或填入具体值，

# 默认 SEO 元数据
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # 是否启用博客
    postsPerPage: 6 # 每页文章数

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # 可用变量：%slug%、%year%、%month%、%day%、%hour%、%minute%、%second%、%category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # 博客主路径，可改成 "articles"（/articles）
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # 分类主路径 /category/some-category，可改成 "group"（/group/some-category）
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # 标签主路径 /tag/some-tag，可改成 "topics"（/topics/some-category）
      robots:
        index: false

    isRelatedPostsEnabled: true # 是否在每篇文章下方显示相关文章组件
    relatedPostsCount: 4 # 显示的相关文章数量

analytics:
  vendors:
    googleAnalytics:
      id: null # 或 "G-XXXXXXXXXX"

ui:
  theme: 'system' # 可选值："system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### 自定义设计

使用 Tailwind CSS v4 时，所有配置都是 CSS 优先（CSS-first）。要自定义字体族、颜色或更多元素，请参考以下文件：

- `src/components/CustomStyles.astro` — 颜色与字体的 CSS 变量
- `src/assets/styles/tailwind.css` — Tailwind 主题令牌（`@theme`）、自定义工具类（`@utility`）与插件
- `src/assets/styles/shadcn.css` — 兼容 shadcn/ui 的变量（`--background`、`--border`、`--ring`……），由主题派生，使 shadcn 风格的组件自动采用你的配色

### 部署

#### 手动部署到生产环境

你可以用下面的命令生成优化后的生产构建：

```shell
npm run build
```

现在网站已经可以部署了。所有生成的文件都位于 `dist` 目录，你可以把它部署到任意喜欢的托管服务。

#### 部署到 Netlify

把这个仓库克隆到你自己的 GitHub 账号下，再部署到 Netlify：

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/arthelokyo/astrowind)

#### 部署到 Vercel

把这个仓库克隆到你自己的 GitHub 账号下，再部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farthelokyo%2Fastrowind)

#### 部署到 Cloudflare

把这个仓库克隆到你自己的 GitHub 账号下，再部署到 Cloudflare Workers（静态资源，无需 adapter；仓库中的 `wrangler.jsonc` 会让 Cloudflare 指向 `dist/`）：

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/arthelokyo/astrowind)

<br>

## 常见问题

**AstroWind v1 还在维护吗？**
是的，处于维护模式：v1 会接收依赖更新与错误修复，新的开发工作则转向 AstroWind v2（2026 年 10 月）。

**如何关闭博客、更换 Open Graph 图片、部署到子路径、接入 CMS、部署到 Cloudflare……？**
直接问你的 AI 编码 Agent。AstroWind 是 _AI-ready_ 的：仓库附带写有项目约定的 [`AGENTS.md`](./AGENTS.md)，以及 [`.agents/skills/`](./.agents/skills/) 中针对常见任务的分步技能指南，让 Claude Code、Codex/ChatGPT、Cursor、Copilot 等工具能可靠地完成这些任务（你也可以自己阅读这些技能文档）。

**有哪些组件，该如何使用？**
每个区块都是 `src/components/widgets/` 中带类型化 props 的组件。附带 props 说明以及各组件演示位置的清单见 [`.agents/skills/use-widgets.md`](./.agents/skills/use-widgets.md)；`src/pages/landing/` 下的六个页面展示了如何把它们组合成完整落地页。

**博客文章放在哪里？**
放在 `src/data/post/`，使用 `.md` 或 `.mdx` 文件，会在构建时读取。

**在哪里修改颜色和字体？**
颜色在 `src/components/CustomStyles.astro`（浅色与深色的 CSS 变量），Tailwind 令牌与工具类在 `src/assets/styles/tailwind.css`，字体在 `astro.config.ts` 的 `fonts` 条目中。

**需要哪个 Node.js 版本？**
Node.js 22.22.3 或更高版本（见 `.nvmrc`）。

<br>

## 参与贡献

如果你有任何想法、建议，或发现了错误，欢迎发起讨论、提交 issue 或创建 pull request。
这对我们所有人都非常有用，我们也很乐意倾听并付诸行动。

## 致谢

最初由 [**Arthelokyo**](https://arthelokyo.com) 创建，并由社区 [贡献者](https://github.com/arthelokyo/astrowind/graphs/contributors) 共同维护。

## 许可

**AstroWind** 基于 MIT 许可发布 — 详见 [LICENSE](./LICENSE.md) 文件。

## 本仓库的 Bun 语境

> 以上正文是上游 [arthelokyo/astrowind](https://github.com/arthelokyo/astrowind) `README.md` 的中文翻译，其中的 npm 命令与 Node 版本按上游原文保留，不适用于本仓库。本仓库实际改用 **Bun**，运行方式如下。

| 项目       | 上游 README                 | 本仓库                                                |
| :--------- | :-------------------------- | :---------------------------------------------------- |
| 包管理器   | npm                         | Bun 1.4.4（`packageManager` 固定）                    |
| 锁文件     | 未指定                      | `bun.lock`，仓库中唯一的锁文件                        |
| 脚本运行时 | 系统 Node.js                | `bunx --bun`，不依赖系统 Node 版本                    |
| Node.js    | >= 22.22.3（上游 `.nvmrc`） | `engines.node` >= 22.23.4，本仓库 `.nvmrc` 为 22.23.4 |

### 本仓库命令

| 命令                            | 作用                                          |
| :------------------------------ | :-------------------------------------------- |
| `bun install --frozen-lockfile` | 安装依赖（CI、Docker 与各部署平台统一使用）   |
| `bun run dev`                   | 在 `localhost:4321` 启动本地开发服务器        |
| `bun run build`                 | 将生产站点构建到 `./dist/`                    |
| `bun run preview`               | 部署前在本地预览构建结果                      |
| `bun run check`                 | astro check + ESLint + Prettier               |
| `bun run fix`                   | ESLint --fix + Prettier -w                    |
| `bun run astro ...`             | 运行 `astro add`、`astro preview` 等 CLI 命令 |

> 不要把脚本改回 `bun --bun astro ...`：Bun 会把它解析成同名的 `astro` 脚本并无限递归；`bunx --bun` 才会解析到二进制。
