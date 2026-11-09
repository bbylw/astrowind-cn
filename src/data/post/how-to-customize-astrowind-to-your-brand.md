---
publishDate: 2026-08-10T00:00:00Z
author: AstroWind 中文站
title: 定制品牌外观：颜色、字体、Logo 与导航
excerpt: 把演示站的蓝色和 Inter 换成你自己的品牌：需要改动的文件其实只有五个，都不用碰组件内部实现。
image: https://images.unsplash.com/photo-1709803056954-aff96d0faf1c?auto=format&fit=crop&w=2070&q=80
imageAlt: 蓝天下彩色的台阶
category: 文档
tags:
  - tailwind css
  - 主题
  - astro
---

AstroWind 的演示站是蓝色主题、Inter 字体、满屏 "AstroWind" 字样。把它变成你的品牌并不需要改组件源码，只要按下面顺序处理几个文件。还没创建项目的话，先看[从零开始](/get-started-website-with-astro-tailwind-css)。

## 1. 站点信息：`src/config.yaml`

`site.name` 决定页头、页脚与默认标题；`metadata` 管默认 SEO；`i18n.language` 决定 `<html lang>` 和日期格式，中文站点设为 `zh-CN`；`ui.theme` 可以强制 `light`、`dark` 或跟随系统。

```yaml
site:
  name: 我的产品
  site: 'https://example.com'
i18n:
  language: zh-CN
ui:
  theme: 'system'
```

这个文件里的 `googleSiteVerificationId` 属于原作者，换成你自己的验证码或设为 `false`。

## 2. 颜色：`CustomStyles.astro`

明暗两套主题都用 CSS 变量表达，`--aw-color-primary`、`--aw-color-accent`、`--aw-color-bg-page` 等是最常改的几个。中文字体也可以在这里补上系统字体回退：

```css
:root {
  --aw-font-sans: var(--font-inter), 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --aw-color-primary: rgb(1 97 239);
}
```

## 3. 设计 token：`tailwind.css`

Tailwind CSS v4 采用 CSS-first 配置。`@theme` 把上面的变量映射成 `bg-primary`、`text-muted` 这类工具类，`@utility` 定义自定义工具类，`@variant dark` 决定暗色模式如何生效。想加一个品牌色，在 `@theme` 里加一行 token 即可。

`shadcn.css` 则提供 `--background`、`--border`、`--ring` 等 shadcn/ui 兼容变量，都从主题变量派生——所以你换色之后，粘贴进来的 shadcn 风格组件也会自动跟着变。

## 4. 字体：`astro.config.ts`

模板用 Astro 原生 Fonts API 自托管 Inter，自动完成子集化、预加载与度量兼容回退：

```ts
fonts: [
  {
    provider: fontProviders.fontsource(),
    name: 'Inter',
    cssVariable: '--font-inter',
    weights: ['100 900'],
    styles: ['normal'],
    subsets: ['latin'],
    fallbacks: ['sans-serif'],
  },
];
```

换成别的字体后，记得把 `CustomStyles.astro` 里的 `--aw-font-*` 指向新的 `cssVariable`。中文字体体积较大，通常更划算的做法是保留拉丁字体自托管、中文交给系统字体栈。

## 5. Logo 与导航

- `src/components/Logo.astro`：站点名前面的图标与文字，换成 SVG 或图片即可。
- `src/assets/favicons/`：favicon 文件，`Favicons.astro` 负责引用。
- `src/navigation.ts`：`headerData.links`、`headerData.actions` 与 `footerData`，菜单、按钮和页脚分组都在这里。

## 6. 首页文案

`src/pages/index.astro` 只是依次调用 Hero、Features、Steps、FAQs 等区块，每个区块的文案都是 props。改文字、调顺序、删掉用不到的区块，不需要动 `src/components/widgets/` 里的实现。

## 验证

改完运行 `bun run build` 与 `bun run check`，然后在浏览器里看首页、博客、暗色模式和移动端菜单。特别注意：结构化数据（首页的 WebSite / Organization）完全来自 `config.yaml`，上线前要保证里面的信息对你的站点是真实的。
