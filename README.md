# AstroWind 中文站

这是一个基于 [AstroWind](https://github.com/arthelokyo/astrowind) 模板改造的**中文介绍站**，用来介绍 AstroWind 这个免费开源的 Astro v7 + Tailwind CSS v4 网站模板。它不是官方站点，原模板遵循 MIT 许可。

## 改了什么

- 全站文案中文化：首页、导航、页脚、404、博客列表/分类/标签、RSS、使用条款与隐私政策。
- `src/config.yaml`：站点名、中文 SEO 元信息、`lang="zh-CN"`，`googleSiteVerificationId` 置为 `false`。
- `src/data/post/`：7 篇英文示例文章换成中文指南（上手、定制、原理、AI 协作、资源、落地页、Markdown 演示）。
- `src/components/CustomStyles.astro`：补充中文系统字体回退。
- 删除与「介绍 AstroWind」无关的英文演示页（`about`、`services`、`pricing`、`contact`、`homes/*`、`landing/*`），站点收敛为首页 + 中文博客。
- 组件里残留的英文 UI（返回博客、相关文章、分页、分享、主题切换等）改为中文。

原有的组件、配置系统、内容集合、图片管线与部署配置保持不变。

## 本地运行

需要 Node.js **22.22.3+**。本项目使用 bun：

```shell
bun install
bun run dev       # http://localhost:4321
bun run build     # 输出到 dist/
bun run preview
```

校验命令：

```shell
bunx astro check
bunx eslint .
bunx prettier --check .
```

> 注意：`package.json` 里的 `check` / `fix` 脚本内部写死了 `npm run ...`，用 `bun run check` 时仍会调用 npm。也可直接用 `bunx prettier -w .` 格式化。

## 上线前必改

- `src/config.yaml` 的 `site.site`：目前是 `https://example.com` 占位域名，会影响 canonical、sitemap、OG 与结构化数据。
- 如需 Google Search Console / GA，填写 `googleSiteVerificationId` 与 `analytics.vendors.googleAnalytics.id`。
- `public/robots.txt` 构建时会由模板自动更新 sitemap 地址。

部署产物是 `dist/` 纯静态文件，`vercel.json`、`netlify.toml`、`wrangler.jsonc`、`Dockerfile` 已备好。

## 目录速查

| 路径                            | 作用                             |
| ------------------------------- | -------------------------------- |
| `src/config.yaml`               | 站点信息、SEO、博客开关、主题    |
| `src/navigation.ts`             | 顶部菜单、按钮、页脚             |
| `src/pages/index.astro`         | 首页，由 widget 组合而成         |
| `src/pages/[...blog]/`          | 博客文章、列表、分类、标签       |
| `src/data/post/`                | Markdown / MDX 文章              |
| `src/components/widgets/`       | 30+ 页面区块组件                 |
| `AGENTS.md` / `.agents/skills/` | 给 AI 助手看的项目约定与任务指南 |

## 许可

改造内容与上游模板同样遵循 [MIT 许可](./LICENSE.md)。原项目由 [Arthelokyo](https://arthelokyo.com) 创建并由社区维护。
