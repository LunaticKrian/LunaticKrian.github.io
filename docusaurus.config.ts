import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 站点配置项
const config: Config = {
    title: '百成',
    tagline: '「没必要的事不做，必要的事尽快做」',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://lunatickrian.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'krian', // Usually your GitHub org/user name.
    projectName: 'krian', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    // 文章发布页配置
    presets: [
        [
            'classic',
            {
                // 文章配置
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                // 博客配置
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    // 主题配置
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus.yaml-social-card.jpg',

        // 站点元信息配置
        metadata: [
            {
                name: 'keywords',
                content: '百城, krian, blog, javascript, typescript, node, react, vue, web, 前端, 后端',
            },
            {
                name: 'algolia-site-verification',
                content: '63F97FC6198CF288'
            }
        ],

        // 顶部导航栏
        navbar: {
            title: '百成',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            // 导航栏配置
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'computerSidebar',
                    position: 'left',
                    label: '所有文章',
                },
                // 计算机理论-下拉菜单
                {
                    type: 'dropdown',
                    label: '计算机基础理论',
                    position: 'left',
                    items: [
                        {
                            type: 'docSidebar',
                            label: '数字电路',
                            sidebarId: 'digitalCircuit',
                        },
                        {
                            type: 'docSidebar',
                            label: '计算机组成原理',
                            sidebarId: 'computerComposition',
                        },
                        {
                            type: 'docSidebar',
                            label: '计算机操作系统',
                            sidebarId: 'computerOperatingSystem',
                        },
                        {
                            type: 'docSidebar',
                            label: '计算机网络',
                            sidebarId: 'computerNetwork',
                        },
                    ],
                },
                {
                    type: 'docSidebar',
                    label: '编程语言',
                    sidebarId: 'programSidebar',
                    position: 'left',
                },
                // 个人项目-下拉菜单
                {
                    type: 'dropdown',
                    label: '个人项目',
                    position: 'left',
                    items: [
                        {
                            href: 'https://github.com/LunaticKrian/AIRC-Study-Frontend',
                            label: '前端学习导航',
                        }
                    ]
                },
                {
                    to: '/blog',
                    label: '个人博客',
                    position: 'right'
                },
                {
                    type: 'docSidebar',
                    label: '个人日志',
                    sidebarId: 'diarySidebar',
                    position: 'right',
                },
                {
                    to: '/about',
                    label: '关于我',
                    position: 'right',
                },
                {
                    href: 'https://lunatickrian.github.io',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },

        // 搜索配置
        algolia: {
            // The application ID provided by Algolia
            appId: '25YYWI12TQ',

            // Public API key: it is safe to commit it
            apiKey: '79beed334109a82ef3dd8f95c6a5888d',

            indexName: 'Krian Web Site',

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            // externalUrlRegex: 'external\\.com|domain\\.com',

            // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            // replaceSearchResultPathname: {
            //     from: '/docs/', // or as RegExp: /\/docs\//
            //     to: '/',
            // },

            // Optional: Algolia search parameters
            searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: 'search',

            // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
            insights: false,
        },

        // 页脚配置
        footer: {
            style: 'dark',
            links: [
                {
                    title: '文章',
                    items: [
                        {
                            label: '计算机基础',
                            to: '/docs/computer/intro',
                        },
                    ],
                },
                {
                    title: '社交',
                    items: [
                        {
                            label: '知乎',
                            href: 'https://www.zhihu.com/people/lunaticer',
                        },
                    ],
                },
                {
                    title: '站点',
                    items: [
                        {
                            label: '个人博客',
                            to: '/blog',
                        },
                        // {
                        //     label: 'GitHub',
                        //     href: 'https://github.com/LunaticKrian',
                        // },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Krian, Inc.`,
        },

        // 权限配置
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
