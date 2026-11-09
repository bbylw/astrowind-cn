import { getPermalink, getBlogPermalink, getAsset, cleanSlug } from './utils/permalinks';

const repo = 'https://github.com/arthelokyo/astrowind';

export const headerData = {
  links: [
    {
      text: '认识 AstroWind',
      links: [
        { text: '核心特性', href: getPermalink('/#features') },
        { text: '快速开始', href: getPermalink('/#quick-start') },
        { text: '页面区块', href: getPermalink('/#components') },
        { text: '项目历程', href: getPermalink('/#story') },
        { text: '常见问题', href: getPermalink('/#faqs') },
      ],
    },
    {
      text: '中文指南',
      links: [
        { text: '全部文章', href: getBlogPermalink() },
        { text: '从零开始搭建站点', href: getPermalink('get-started-website-with-astro-tailwind-css', 'post') },
        { text: '定制颜色、字体与 Logo', href: getPermalink('how-to-customize-astrowind-to-your-brand', 'post') },
        { text: '模板原理拆解', href: getPermalink('astrowind-template-in-depth', 'post') },
        { text: '用 AI 助手改造模板', href: getPermalink('build-websites-with-ai', 'post') },
        { text: '教程分类', href: getPermalink(cleanSlug('教程'), 'category') },
      ],
    },
    {
      text: '资源',
      links: [
        { text: 'GitHub 仓库', href: repo },
        { text: '官方演示站', href: 'https://astrowind.vercel.app/' },
        { text: 'Astro 官方文档', href: 'https://docs.astro.build/' },
        { text: 'Tailwind CSS 文档', href: 'https://tailwindcss.com/docs' },
        { text: 'AI 技能说明（Skills）', href: `${repo}/tree/main/.agents/skills` },
      ],
    },
  ],
  actions: [{ text: '获取模板', href: repo, target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '站点',
      links: [
        { text: '核心特性', href: getPermalink('/#features') },
        { text: '快速开始', href: getPermalink('/#quick-start') },
        { text: '常见问题', href: getPermalink('/#faqs') },
        { text: '项目历程', href: getPermalink('/#story') },
      ],
    },
    {
      title: '中文指南',
      links: [
        { text: '文章列表', href: getBlogPermalink() },
        { text: '从零开始搭建站点', href: getPermalink('get-started-website-with-astro-tailwind-css', 'post') },
        { text: '定制品牌外观', href: getPermalink('how-to-customize-astrowind-to-your-brand', 'post') },
        { text: '模板原理拆解', href: getPermalink('astrowind-template-in-depth', 'post') },
        { text: '建站资源清单', href: getPermalink('useful-resources-to-create-websites', 'post') },
      ],
    },
    {
      title: '资源',
      links: [
        { text: 'GitHub 仓库', href: repo },
        { text: '官方演示站', href: 'https://astrowind.vercel.app/' },
        { text: 'AGENTS.md 约定', href: `${repo}/blob/main/AGENTS.md` },
        { text: '版本发布记录', href: `${repo}/releases` },
      ],
    },
    {
      title: '社区',
      links: [
        { text: '问题反馈', href: `${repo}/issues` },
        { text: '讨论区', href: `${repo}/discussions` },
        { text: '贡献指南', href: `${repo}#contributing` },
        { text: 'MIT 许可', href: `${repo}/blob/main/LICENSE.md` },
      ],
    },
  ],
  secondaryLinks: [
    { text: '使用条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS 订阅', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'GitHub 仓库', icon: 'tabler:brand-github', href: repo },
  ],
  footNote: `
    基于 <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo/astrowind">AstroWind</a> 模板构建的中文介绍站 · 非官方站点 · 原模板采用 MIT 许可。
  `,
};
