---
publishDate: 2026-07-13T00:00:00Z
author: AstroWind 中文站
title: 用 widgets 拼出一个中文落地页
excerpt: 落地页只做一件事，而 AstroWind 的区块组件刚好能把它拆成可复用的几段。这里给出一套通用的组合顺序与文案写法。
image: https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
imageAlt: 桌上手绘的网页草图
category: 教程
tags:
  - 组件
  - 落地页
  - 前端
---

落地页只有一个任务：让从广告、邮件、搜索结果或链接进来的访客完成**一个**动作——留下邮箱、购买、跳转结账、加入等待名单。页面上所有内容要么帮这个动作，要么妨碍它。AstroWind 的 widget 天然适合表达这种结构。

## 一套通用顺序

1. **Hero**：一句话说清「为谁、解决什么、带来什么」，配一个主按钮。不要在这里塞三个同等权重的 CTA。
2. **SocialProof / Stats**：用数字或客户Logo 降低疑虑，越早越好。
3. **Features**：3–6 个卖点，每个卖点写结果而不是功能名词。
4. **Content / Steps**：解释怎么用、为什么可信，图文分栏比长段落更好读。
5. **Testimonials / Quote**：借别人的口把关键承诺再说一遍。
6. **Pricing / Comparison**：如果决策需要比较，就在这里给出清晰对照。
7. **FAQs**：处理最后几个犹豫，顺便生成 `FAQPage` 结构化数据。
8. **CallToAction**：重复第一步的那个动作，文案保持一致。

## 页面就是一份组件清单

在 `src/pages/` 新建 `.astro` 文件，用 `PageLayout` 包裹，然后依次调用区块。每个区块都接收带类型的 props，文案直接写在页面里：

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import Hero from '~/components/widgets/Hero.astro';
import FAQs from '~/components/widgets/FAQs.astro';
---

<Layout metadata={{ title: '产品落地页' }}>
  <Hero
    tagline="免费试用 14 天"
    title="把重复工作交给自动化"
    actions={[{ variant: 'primary', text: '立即开始', href: '/signup' }]}
  />
  <FAQs title="常见问题" items={[{ title: '需要绑定信用卡吗？', description: '不需要。' }]} />
</Layout>
```

具体的 props 名称、可选布局与演示位置都写在 `.agents/skills/use-widgets.md` 里，`add-page.md` 与 `write-landing-page.md` 则给出完整的新页面流程。

## 写中文文案时注意

- **标题短一点**：中文在同样宽度下占的字数更少，Hero 标题控制在 20 字以内更容易保持一行。
- **按钮动词化**：「立即开始」「获取模板」「查看文档」，避免「了解更多」这种没有信息量的词。
- **数字要真实**：`Stats` 与 `SocialProof` 里的数字会让人当真，没验证过就别写。
- **保持术语一致**：全站统一「区块」「模板」「部署」等说法，别在相邻两段里换词。

## 上线前检查

跑一遍 `npm run build` 与 `npm run check`，然后在手机宽度下看首屏按钮是否还在首屏内、暗色模式下文字是否可读、FAQ 折叠是否正常。模板自带视口预取与视图过渡，落地页之间切换通常不需要额外优化。
