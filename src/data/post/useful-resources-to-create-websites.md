---
publishDate: 2026-08-14T00:00:00Z
author: AstroWind 中文站
title: 建站资源清单：Astro 生态常用工具
excerpt: 从官方文档、图标与字体到性能检测与部署平台，整理搭建 AstroWind 站点时最常用到的免费资源。
image: https://images.unsplash.com/photo-1732896066088-7b2aee1c1eba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
imageAlt: 摆满电子设备的桌面
category: 资源
tags:
  - 资源
  - 前端
  - astro
---

一个专业站点是上百个小决定的总和：用哪套图标、哪组字体、主视觉图从哪来、对比度怎么查、社交分享卡片好不好看。下面这些工具在 AstroWind 项目里最常用，基本都免费。

## 框架与文档

- [Astro 官方文档](https://docs.astro.build/)：内容集合、资源管线、视图过渡、Fonts API 都讲得很清楚。
- [Tailwind CSS 文档](https://tailwindcss.com/docs)：v4 改为 CSS-first 配置，`@theme`、`@utility`、`@variant` 的用法必读。
- [AstroWind 仓库](https://github.com/arthelokyo/astrowind)：源码、Issue、Discussion 与发布记录。
- [AGENTS.md](https://github.com/arthelokyo/astrowind/blob/main/AGENTS.md)：让人和 AI 都能快速理解项目约定。

## 图标、字体与图片

- [Iconify](https://iconify.design/) / [Tabler Icons](https://tablericons.com/)：模板通过 `astro-icon` 使用 `tabler:*` 与 `flat-color-icons:*`，在 `astro.config.ts` 的 `include` 里增减图标集。
- [Fontsource](https://fontsource.org/)：Astro Fonts API 的 `fontProviders.fontsource()` 就从这里自托管字体。
- [Unsplash](https://unsplash.com/)：演示文章的配图来源；远程图由 `unpic` 直接走 CDN。
- [Squoosh](https://squoosh.app/) / Sharp：需要自己准备本地素材时用来压缩。

## 设计辅助

- [Tailwind CSS 颜色](https://tailwindcss.com/docs/colors) 与 [UI Colors](https://uicolors.app/)：生成一套协调的品牌色阶。
- [shadcn/ui](https://ui.shadcn.com/)：模板的 `shadcn.css` 提供兼容变量，方便直接粘组件。
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)：检查明暗两套配色的可读性。

## SEO 与性能

- [PageSpeed Insights](https://pagespeed.web.dev/) 与 Lighthouse：模板 README 里展示的四项 100 分就来自这里。
- [Schema.org](https://schema.org/)：首页的 `WebSite` / `Organization`、文章的 `BlogPosting`、FAQ 的 `FAQPage` 都遵循这套词汇。
- [Open Graph 调试](https://developers.facebook.com/tools/debug/)：检查分享卡片，记得先确认 `config.yaml` 里的 `site.site` 是真实域名。
- [Google Search Console](https://search.google.com/search-console)：配合 `googleSiteVerificationId` 与自动生成的 sitemap 使用。

## 部署

`dist/` 是纯静态产物，以下平台都能直接托管，仓库里已备好对应配置：

| 平台               | 配置文件                                     |
| ------------------ | -------------------------------------------- |
| Vercel             | `vercel.json`                                |
| Netlify            | `netlify.toml`                               |
| Cloudflare Workers | `wrangler.jsonc`（静态资源，不需要 adapter） |
| 自建 / 容器        | `Dockerfile`、`docker-compose.yml`、`nginx/` |

需要子路径部署（例如 GitHub Pages）时，把 `SITE.base` 设成仓库路径，并参考 `.agents/skills/deploy-with-base-path.md`。
