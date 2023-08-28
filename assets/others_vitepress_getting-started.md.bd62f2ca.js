import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.cac06360.js";const l="/code-snippets/assets/select-pages-branch.f2cfcad7.png",o="/code-snippets/assets/create-status-badge.79d5bf93.png",g=JSON.parse('{"title":"VitePress 初始化","description":"","frontmatter":{},"headers":[],"relativePath":"others/vitepress/getting-started.md","filePath":"others/vitepress/getting-started.md","lastUpdated":1678846972000}'),e={name:"others/vitepress/getting-started.md"},t=p(`<h1 id="vitepress-初始化" tabindex="-1">VitePress 初始化 <a class="header-anchor" href="#vitepress-初始化" aria-label="Permalink to &quot;VitePress 初始化&quot;">​</a></h1><p>经常需要在本地创建 <a href="https://vitepress.vuejs.org/guide/getting-started" target="_blank" rel="noreferrer">VitePress</a> 项目来编写文档记录一些代码、经验或总结。</p><h2 id="创建项目目录" tabindex="-1">创建项目目录 <a class="header-anchor" href="#创建项目目录" aria-label="Permalink to &quot;创建项目目录&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">project_name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;code-snippets&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 假定项目名称是 code-snippets</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> $project_name &amp;&amp; </span><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $project_name </span><span style="color:#6A737D;"># 创建并更改为新目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 初始化git仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加忽略目录到 .gitignore 文件</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;node_modules/</span></span>
<span class="line"><span style="color:#9ECBFF;">docs/.vitepress/dist/</span></span>
<span class="line"><span style="color:#9ECBFF;">docs/.vitepress/cache/&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.gitignore</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">project_name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;code-snippets&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 假定项目名称是 code-snippets</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> $project_name &amp;&amp; </span><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $project_name </span><span style="color:#6A737D;"># 创建并更改为新目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 初始化git仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加忽略目录到 .gitignore 文件</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;node_modules/</span></span>
<span class="line"><span style="color:#032F62;">docs/.vitepress/dist/</span></span>
<span class="line"><span style="color:#032F62;">docs/.vitepress/cache/&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.gitignore</span></span></code></pre></div><p>然后，使用 <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">yarn</a> 包管理器进行初始化。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>一般情况执行完成上面的命令后一直按回车使用默认值会生成默认的内容。</p><details class="details custom-block"><summary>点击查看默认生成的内容</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;code-snippets&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Record some code snippets at work.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;repository&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://github.com/curder/code-snippets.git&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;author&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;curder &lt;q.curder@gmail.com&gt;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;license&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;MIT&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;code-snippets&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Record some code snippets at work.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;repository&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://github.com/curder/code-snippets.git&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;author&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;curder &lt;q.curder@gmail.com&gt;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;license&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;MIT&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><h2 id="安装-vitepress" tabindex="-1">安装 VitePress <a class="header-anchor" href="#安装-vitepress" aria-label="Permalink to &quot;安装 VitePress&quot;">​</a></h2><p>将 VitePress 和 Vue 作为项目的依赖。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建第一个文档</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;# Hello VitePress&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/README.md</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&lt;!--@include: ./README.md--&gt;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/index.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建第一个文档</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;# Hello VitePress&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/README.md</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&lt;!--@include: ./README.md--&gt;&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/index.md</span></span></code></pre></div><h2 id="启动开发环境" tabindex="-1">启动开发环境 <a class="header-anchor" href="#启动开发环境" aria-label="Permalink to &quot;启动开发环境&quot;">​</a></h2><p>添加配置到 <code>package.json</code> 文件，这些配置用于在本地执行命令，比如：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;code-snippets&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Record some code snippets at work.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;repository&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://github.com/curder/code-snippets.git&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;author&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;curder &lt;q.curder@gmail.com&gt;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;license&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;MIT&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:preview&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress preview docs&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  }, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;vitepress&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^1.0.0-alpha.58&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;code-snippets&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Record some code snippets at work.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;repository&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://github.com/curder/code-snippets.git&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;author&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;curder &lt;q.curder@gmail.com&gt;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;license&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;MIT&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress dev docs&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress build docs&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:preview&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress preview docs&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">  }, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;devDependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;vitepress&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^1.0.0-alpha.58&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 在本地环境执行下面的命令编译项目。</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成环境使用</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 在本地环境执行下面的命令编译项目。</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成环境使用</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:build</span></span></code></pre></div><p>VitePress 将在 localhost:5173 启动热重载开发服务器。</p><h2 id="添加个性化配置" tabindex="-1">添加个性化配置 <a class="header-anchor" href="#添加个性化配置" aria-label="Permalink to &quot;添加个性化配置&quot;">​</a></h2><p>使用下面的命令在 <code>docs/.vitepress/</code> 目录下创建 <code>config.ts</code> 文件，用于个性化当前 VitePress 项目：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/.vitepress/config.ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">touch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/.vitepress/config.ts</span></span></code></pre></div><p>大致的内容如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {defineConfig} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    lang: </span><span style="color:#9ECBFF;">&quot;zh-CN&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&quot;/code-snippets/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;代码片段&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&quot;记录一些工作中常用的代码片段。&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    lastUpdated: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        logo: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        siteTitle: </span><span style="color:#9ECBFF;">&quot;代码片段&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        outline: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&quot;章节导航&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            level: </span><span style="color:#9ECBFF;">&#39;deep&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        lastUpdatedText: </span><span style="color:#9ECBFF;">&quot;最后更新时间&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        docFooter: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            prev: </span><span style="color:#9ECBFF;">&#39;上一页&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            next: </span><span style="color:#9ECBFF;">&#39;下一页&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pattern: </span><span style="color:#9ECBFF;">&quot;https://github.com/curder/code-snippets/edit/master/docs/:path&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;编辑它&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        socialLinks: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/curder/code-snippets&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        nav: </span><span style="color:#B392F0;">nav</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        sidebar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;/guide&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">sidebarGuide</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nav</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sidebarGuide</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {defineConfig} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    lang: </span><span style="color:#032F62;">&quot;zh-CN&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&quot;/code-snippets/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;代码片段&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    description: </span><span style="color:#032F62;">&quot;记录一些工作中常用的代码片段。&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    lastUpdated: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        logo: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        siteTitle: </span><span style="color:#032F62;">&quot;代码片段&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        outline: {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&quot;章节导航&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            level: </span><span style="color:#032F62;">&#39;deep&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        lastUpdatedText: </span><span style="color:#032F62;">&quot;最后更新时间&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        docFooter: {</span></span>
<span class="line"><span style="color:#24292E;">            prev: </span><span style="color:#032F62;">&#39;上一页&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            next: </span><span style="color:#032F62;">&#39;下一页&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        editLink: {</span></span>
<span class="line"><span style="color:#24292E;">            pattern: </span><span style="color:#032F62;">&quot;https://github.com/curder/code-snippets/edit/master/docs/:path&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;编辑它&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        socialLinks: [</span></span>
<span class="line"><span style="color:#24292E;">            {icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/curder/code-snippets&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        nav: </span><span style="color:#6F42C1;">nav</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">        sidebar: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;/guide&quot;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">sidebarGuide</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nav</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">    ];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sidebarGuide</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">    ];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="添加-github-action" tabindex="-1">添加 GitHub Action <a class="header-anchor" href="#添加-github-action" aria-label="Permalink to &quot;添加 GitHub Action&quot;">​</a></h2><p>如果代码仓库是放在 <a href="https://github.com/curder" target="_blank" rel="noreferrer">GitHub</a> 上，可以直接将代码部署到 <code>github.io</code> 上。</p><h3 id="添加配置文件" tabindex="-1">添加配置文件 <a class="header-anchor" href="#添加配置文件" aria-label="Permalink to &quot;添加配置文件&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建构建文档的配置文件</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.github/workflows</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.github/workflows/build-docs.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建构建文档的配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.github/workflows</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">touch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.github/workflows/build-docs.yml</span></span></code></pre></div><p>并将下面的内容添加到 <code>./.github/workflows/build-docs.yml</code> 文件中。</p><details class="details custom-block"><summary>点击查看 GitHub Action 配置文件</summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># github pages: https://github.com/marketplace/actions/github-pages-action#table-of-contents</span></span>
<span class="line"><span style="color:#6A737D;"># How to cache node_modules in GitHub Actions with Yarn: https://dev.to/mpocock1/how-to-cache-nodemodules-in-github-actions-with-yarn-24eh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">GitHub Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># trigger deployment manually</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build-docs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-22.04</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">permissions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">contents</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">write</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">concurrency</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">group</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ github.workflow }}-\${{ github.ref }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># fetch all commits to get last updated time or other git log info</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">fetch-depth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;16.x&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get yarn cache</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn-cache</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">echo &quot;YARN_CACHE_DIR=$(yarn cache dir)&quot; &gt;&gt; &quot;\${GITHUB_OUTPUT}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Cache dependencies</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/cache@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ steps.yarn-cache.outputs.YARN_CACHE_DIR }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">restore-keys</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">            \${{ runner.os }}-yarn-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install packages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># run build script</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build VitePress site</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deployment</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">github_token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">publish_dir</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">./docs/.vitepress/dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># github pages: https://github.com/marketplace/actions/github-pages-action#table-of-contents</span></span>
<span class="line"><span style="color:#6A737D;"># How to cache node_modules in GitHub Actions with Yarn: https://dev.to/mpocock1/how-to-cache-nodemodules-in-github-actions-with-yarn-24eh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">GitHub Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">master</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># trigger deployment manually</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_dispatch</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build-docs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-22.04</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">permissions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">contents</span><span style="color:#24292E;">: </span><span style="color:#032F62;">write</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">concurrency</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">group</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ github.workflow }}-\${{ github.ref }}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># fetch all commits to get last updated time or other git log info</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">fetch-depth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Setup Node</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;16.x&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get yarn cache</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn-cache</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">echo &quot;YARN_CACHE_DIR=$(yarn cache dir)&quot; &gt;&gt; &quot;\${GITHUB_OUTPUT}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Cache dependencies</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/cache@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ steps.yarn-cache.outputs.YARN_CACHE_DIR }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">restore-keys</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">            \${{ runner.os }}-yarn-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install packages</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># run build script</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build VitePress site</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deployment</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">github_token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">publish_dir</span><span style="color:#24292E;">: </span><span style="color:#032F62;">./docs/.vitepress/dist</span></span></code></pre></div></details><p>经过上面的配置后在推送代码到 <code>master</code> 分支时会直接触发部署功能，部署到 <code>gh-pages</code> 新分支。</p><h3 id="设置默认pages分支" tabindex="-1">设置默认Pages分支 <a class="header-anchor" href="#设置默认pages分支" aria-label="Permalink to &quot;设置默认Pages分支&quot;">​</a></h3><p>通过在项目的 <code>Settings</code> -&gt; <code>Pages</code> -&gt; <code>Branch</code>，比如这里的 <a href="https://github.com/curder/code-snippets/settings/pages" target="_blank" rel="noreferrer">Pages</a> 中的 Branch 分支选择 <strong><code>gh-pages</code></strong>，等待一段时间就可以看到项目部署到了 <a href="https://curder.github.io/code-snippets/" target="_blank" rel="noreferrer">YOUR_GITHUB_USERNAME.github.io/PROJECT_NAME</a>。</p><p><img src="`+l+'" alt=""></p><h3 id="添加构建状态" tabindex="-1">添加构建状态 <a class="header-anchor" href="#添加构建状态" aria-label="Permalink to &quot;添加构建状态&quot;">​</a></h3><ul><li><p>获取构建状态</p><p>在 GitHub 项目仓库下选择 <code>Actions</code> -&gt; <code>GitHub Pages</code> -&gt; <code>Create status badge</code>，点击按钮后复制弹出层中的构建 markdown 内容。 <img src="'+o+'" alt=""></p></li><li><p>构建的 markdown 内容 <a href="https://github.com/curder/code-snippets/actions/workflows/build-docs.yml" target="_blank" rel="noreferrer">YOUR_GITHUB_USERNAME/PROJECT_NAME</a></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">![GitHub Pages](https://github.com/curder/code-snippets/actions/workflows/build-docs.yml/badge.svg)</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">https://github.com/curder/code-snippets/actions/workflows/build-docs.yml</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">![GitHub Pages](https://github.com/curder/code-snippets/actions/workflows/build-docs.yml/badge.svg)</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">https://github.com/curder/code-snippets/actions/workflows/build-docs.yml</span><span style="color:#24292E;">)</span></span></code></pre></div></li><li><p>将构建状态放到项目首页文件</p><p>将上面复制的内容可以通过编辑器写入到 <code>docs/README.md</code> 文件中，也可以通过下面的命令追加到文件的末尾。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[![GitHub Pages](https://github.com/curder/code-snippets/actions/workflows/build-docs.yml/badge.svg)](https://github.com/curder/code-snippets/actions/workflows/build-docs.yml)&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/README.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[![GitHub Pages](https://github.com/curder/code-snippets/actions/workflows/build-docs.yml/badge.svg)](https://github.com/curder/code-snippets/actions/workflows/build-docs.yml)&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/README.md</span></span></code></pre></div></li></ul><p>以上是针对使用 VitePress 写文档的一些经常使用到的流程。</p>',34),c=[t];function r(E,y,i,d,u,h){return n(),a("div",null,c)}const b=s(e,[["render",r]]);export{g as __pageData,b as default};
