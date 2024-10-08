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
            '/programming-language': sidebarProgrammingLanguage(),
            "/database": sidebarDatabase(),
            "/os": sidebarOs(),
            "/others": sidebarOthers(),
        }
    }
});


function nav()
{
    return [
        {text: "编程语言", link: "/programming-language/php/laravel/route/redirect", activeMatch: '/programming-language'},
        {text: "数据库", link: "/database/mysql/grant-privileges-to-user", activeMatch: "/database"},
        {text: '操作系统', link: '/os/macos/toggle-toolbar-and-dock-status', activeMatch: '/os'},
        {text: '其他', link: '/others/vitepress/getting-started', activeMatch: '/others'},
    ];
}

function sidebarProgrammingLanguage()
{
    return [
        {
            text: "Laravel",
            items: [
                {text: "重定向 redirect", link: "/programming-language/php/laravel/route/redirect"},
                {text: "@each 渲染集合视图", link: "/programming-language/php/laravel/blade/each"},
                {text: "Vite 静态资源替换", link: "/programming-language/php/laravel/blade/vite"},
                {text: "pint 代码风格", link: "/programming-language/php/laravel/code-style/pint"},
                {text: "安装指定版本 Laravel", link: "/programming-language/php/laravel/installing-a-specific-version-of-laravel"},
            ]
        },
        {
          text: "Node",
          items: [
              {text: "NPM 镜像", link: "/programming-language/node/npm-mirrors"},
              {text: "使用 docker 编译静态资源", link: "/programming-language/node/compile-static-resources-using-docker"},
          ],
        },
        {
          text: "Python",
          items: [
              {text: 'Python 执行 JS 代码', link: "/programming-language/python/python-executes-js-code"},
          ]
        },
        {
            text: "Others",
            items: [
                {text: "Composer 镜像",link: "/programming-language/php/composer-mirrors"},
            ]
        }
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
                {text: "查找和替换文本", link: "/database/mysql/update-and-replace"},
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
                {text: "显示和隐藏 Mac 系统中的隐藏文件", link: "/os/macos/show-and-hide-dot-files"},
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
                {text: "VitePress 初始化", link: "/others/vitepress/getting-started"},
                {text: "在网页上启用设计模式", link: "/others/enable-design-mode-on-the-document"},
                {text: "SSH 端口转发",link: "/others/ssh-port-forwarding" },
                {text: "Docker 命令", link: "/others/docker-commands-essentials"},
            ]
        },
        {
            "text": "Git",
            "items": [
                {text: "Git 命令", link: "/others/git/commands-essentials"},
                {text: "Git 别名", link: "/others/git/bash-alias"},
                {text: "获取提交的文件", link: "/others/git/get-all-files-submitted-by-git"},
            ],
        },
    ];
}