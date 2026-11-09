# AstroWind 中文站

这是一个基于 [AstroWind](https://github.com/arthelokyo/astrowind) 模板改造的**中文介绍站**，用来介绍 AstroWind 这个免费开源的 Astro v7 + Tailwind CSS v4 网站模板。它不是官方站点，原模板遵循 MIT 许可。

## 改了什么

- 全站文案中文化：首页、导航、页脚、404、博客列表/分类/标签、RSS、使用条款与隐私政策。
- `src/config.yaml`：站点名、中文 SEO 元信息、`lang="zh-CN"`，`googleSiteVerificationId` 置为 `false`。
- `src/data/post/`：7 篇英文示例文章换成中文指南（上手、定制、原理、AI 协作、资源、落地页、Markdown 演示）。
- `src/components/CustomStyles.astro`：补充中文系统字体回退。
- 删除与「介绍 AstroWind」无关的英文演示页（`about`、`services`、`pricing`、`contact`、`homes/*`、`landing/*`），站点收敛为首页 + 中文博客。
- 组件里残留的英文 UI（返回博客、相关文章、分页、分享、主题切换等）改为中文。
- 包管理器全面迁移到 **Bun**，依赖升级到当前最新兼容版本。

原有的组件、配置系统、内容集合与图片管线保持不变。

## 技术栈与版本

| 类别                            | 版本                               |
| ------------------------------- | ---------------------------------- |
| 包管理器 / 运行时               | Bun 1.4.4（`packageManager` 固定） |
| Astro                           | 7.4.7                              |
| Tailwind CSS                    | 4.3.5                              |
| TypeScript                      | 6.0.3                              |
| MDX / markdown-remark           | 8.1.3 / 7.3.6                      |
| ESLint / Prettier               | 10.14.0 / 3.9.10                   |
| js-yaml / prettier-plugin-astro | 5.5.0 / 1.1.2                      |
| Sharp                           | 0.35.5                             |

> TypeScript 最新版是 7.0.2，但 `@astrojs/check` 与 `typescript-eslint` 尚未支持 TS 7 API，因此采用它们支持的最高版本 6.0.3。
> `js-yaml` 5 为纯 ESM，`vendor/integration/utils/loadConfig.ts` 使用具名导入 `{ load }`。

## 本地运行

需要 **Bun >= 1.4.4**。Node.js >= 22.23.4 只是 Astro CLI 的兼容下限；所有脚本都通过 `bunx --bun` 强制使用 Bun 运行时，因此不依赖系统 Node 版本。

```shell
bun install --frozen-lockfile
bun run dev       # http://localhost:4321
bun run build     # 输出到 dist/
bun run preview
```

校验与格式化：

```shell
bun run check     # astro check + ESLint + Prettier
bun run fix       # ESLint --fix + Prettier -w
```

> 不要把这些脚本改回 `bun --bun astro ...`：bun 会把它解析成同名的 `astro` 脚本并无限递归。`bunx --bun` 才是走二进制解析。

## 锁文件与部署

`bun.lock` 是仓库里**唯一**的锁文件，`package-lock.json`、pnpm / yarn 锁文件都已移除并加入 `.gitignore`。CI、Docker 与各部署平台统一使用：

```shell
bun install --frozen-lockfile
bun run build
```

- **GitHub Pages（本站实际部署方式）**：`.github/workflows/deploy-pages.yml` 在 push 到 `main` 时用 Bun 构建并上传 `dist/`，再由 `actions/deploy-pages` 发布。站点地址 <https://bbylw.github.io/astrowind-cn/>，Pages 的 Source 需设为 **GitHub Actions**。
- GitHub Actions（CI）：`.github/workflows/actions.yaml`，`oven-sh/setup-bun@v2` + Node 22.23.4，缓存 `~/.bun/install/cache`。
- Docker：`oven/bun:1.4.4-alpine` 多阶段构建，最终由 nginx 提供 `dist/`。
- Vercel：`installCommand` / `buildCommand` 显式指定 bun。
- Netlify：`BUN_VERSION=1.4.4`，构建命令显式执行 bun（其文档只对 `bun.lockb` 做自动检测）。
- Cloudflare Workers：在 Workers Builds 里把安装命令设为 `bun install --frozen-lockfile`、构建命令设为 `bun run build`。

> 例外：`.stackblitzrc` 与 `sandbox.config.json` 仍使用平台自带的 npm，这两个在线 IDE 由平台管理运行时；本站 README 不再链接它们。

## 上线前必改

- `src/config.yaml` 已按 GitHub Pages 项目页设为 `site: 'https://bbylw.github.io'` + `base: '/astrowind-cn'`。换域名或改成根路径站点时，必须同时改这两项，否则资源链接会 404；`trailingSlash` 保持 `false`（改成 `true` 会给 `#anchor` 链接追加尾斜杠）。
- 如需 Google Search Console / GA，填写 `googleSiteVerificationId` 与 `analytics.vendors.googleAnalytics.id`。
- `public/robots.txt` 构建时会由模板自动更新 sitemap 地址（会自动带上 base）。

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
