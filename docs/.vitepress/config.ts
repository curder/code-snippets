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
            "/database": sidebarDatabase(),
            "/os": sidebarOs(),
            "/others": sidebarOthers(),
        }
    }
});


function nav()
{
    return [
        {text: "数据库", link: "/database/mysql/grant-privileges-to-user", activeMatch: "/database"},
        {text: '操作系统', link: '/os/macos/toggle-toolbar-and-dock-status', activeMatch: '/os'},
        {text: '其他', link: '/others/vitepress/getting-started', activeMatch: '/others'},
    ];
}

function sidebarDatabase()
{
    return [
        {
            text: "MySQL",
            items: [
                {text: "MySQL 用户授权", link: "/database/mysql/grant-privileges-to-user"},
                {text: "修改 MySQL 用户密码", link: "/database/mysql/change-password"},
            ]
        }
    ];
}

function sidebarOs() {
    return [
        {
            text: "MacOS",
            items: [
                {text: "切换 Mac 工具栏和菜单显示状态", link: "/os/macos/toggle-toolbar-and-dock-status"},
            ]
        }
    ];
}
function sidebarOthers()
{
    return [
        {
            // text: "其他",
            // collapsible: true,
            // collapsed: false,
            items: [
                {text: "VitePress初始化", link: "/others/vitepress/getting-started"},
            ]
        }
    ];
}