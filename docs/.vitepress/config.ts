import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/code-snippets/",
    title: "代码片段",
    description: "记录一些工作中常用的代码片段。",
    lastUpdated: true,
    themeConfig: {
        logo: "",
        siteTitle: "代码片段",
        outline: {
            label: "章节导航",
            level: 'deep',
        },
        lastUpdatedText: "最后更新时间",
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/code-snippets/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/code-snippets'}
        ],
        nav: nav(),
        sidebar: {
            "/vitepress": sidebarVitepress(),
        }
    }
});


function nav()
{
    return [
        {text: 'VitePress', link: '/vitepress/getting-started', activeMatch: '/vitepress'},
    ];
}

function sidebarVitepress()
{
    return [

    ];
}