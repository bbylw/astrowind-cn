---
publishDate: 2026-08-17T00:00:00Z
author: AstroWind 中文站
title: 用 AI 助手改造 AstroWind：AGENTS.md 与 16 个技能
excerpt: 为什么这个模板特别适合 AI 协作，AGENTS.md 写了什么，.agents/skills/ 里有哪些现成任务指南，以及怎样让改动保持可审查。
image: https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
imageAlt: 蓝色玩具机器人
category: 教程
tags:
  - ai
  - astro
  - 工程实践
---

做营销站的大部分工作并不难，只是琐碎：再加一个和现有风格一致的页面、把某个区块挪到另一页、写一篇 frontmatter 正确的文章、改一个谁都记不住的部署配置。AI 编程助手恰好擅长这些——前提是它知道这个项目的约定。AstroWind 把约定直接写进了仓库。

## 两份说明书

- **`AGENTS.md`**：项目概览、技术栈、目录结构、`~/` 路径别名、配置系统、Tailwind v4 的 CSS-first 写法、内容集合、组件模式、图片与字体处理，以及改动后的验证清单。
- **`.agents/skills/`**：16 个针对具体任务的分步指南，覆盖常见改造场景。`CLAUDE.md` 则为 Claude Code 提供同样的入口。

README 的 FAQ 甚至直接写：「问你的 AI 编程助手。」这不是营销话术，而是这个模板的主要设计目标之一。

## 16 个技能分别解决什么

| 类别       | 技能                                                                                      |
| ---------- | ----------------------------------------------------------------------------------------- |
| 加内容     | `add-blog-post`、`add-page`、`add-component`、`write-landing-page`                        |
| 改外观     | `styling`、`use-shadcn-tokens`、`customize-header`、`set-open-graph-image`                |
| 博客配置   | `disable-blog`、`content-at-build-time`、`add-structured-data`                            |
| 部署与集成 | `deploy-cloudflare`、`deploy-with-base-path`、`setup-decap-cms`、`configure-contact-form` |
| 组件参考   | `use-widgets`（每个区块的 props 与示例位置）                                              |

`use-widgets.md` 是其中最常用的一份：它逐个列出 30+ 区块的 props、类型和演示页面，助手不用猜某个组件该传什么。

## 一个好用的提问方式

不要只说「帮我加个页面」，把目标和校验条件一起给它：

> 参考 `.agents/skills/add-page.md`，用 `src/components/widgets/` 里的现有区块做一个「客户案例」页，文案用中文，不要新增第三方依赖。完成后运行 `bun run build` 和 `bun run check`，并告诉我改了哪些文件。

技能文档会把「文件放哪、用哪个布局、怎么接导航」固定下来，你审查 diff 时看到的就只是预期内的改动。

## 改动之后仍然要验证

`AGENTS.md` 的验证清单值得照抄进提示词：

1. `bun run build` 通过；
2. `bun run check` 通过（`astro check` + ESLint + Prettier）；
3. 浏览器里看首页、博客、暗色模式与移动端菜单；
4. 首页的 `WebSite` / `Organization` 结构化数据只由 `config.yaml` 生成，确保上线时内容真实。

顺带一提：本站本身就是一次「AI 改造模板」的实践——把演示站的英文文案全部换成介绍 AstroWind 的中文内容，同时保留原有组件与构建链路。想了解改了哪些地方，看[模板原理拆解](/astrowind-cn/astrowind-template-in-depth)与[定制品牌外观](/astrowind-cn/how-to-customize-astrowind-to-your-brand)。
