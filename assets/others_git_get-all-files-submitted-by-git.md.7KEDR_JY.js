import{_ as s,c as i,o as a,V as t}from"./chunks/framework.dxkzPeO5.js";const F=JSON.parse('{"title":"获取 git 提交的所有文件","description":"","frontmatter":{},"headers":[],"relativePath":"others/git/get-all-files-submitted-by-git.md","filePath":"others/git/get-all-files-submitted-by-git.md","lastUpdated":1677220008000}'),e={name:"others/git/get-all-files-submitted-by-git.md"},l=t(`<h1 id="获取-git-提交的所有文件" tabindex="-1">获取 git 提交的所有文件 <a class="header-anchor" href="#获取-git-提交的所有文件" aria-label="Permalink to &quot;获取 git 提交的所有文件&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff-tree -r --no-commit-id --name-only {commitId} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tar -rf files.tar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取最后一次提交时变更的所有文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff-tree -r --no-commit-id --name-only \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rev-parse HEAD\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tar -rf files.tar</span></span></code></pre></div><ul><li><code>{commandId}</code> 提交历史记录的 Hash 值</li><li><code>files.tar</code> 将变更的文件打包到当前目录下的 <code>files.tar</code> 文件中</li><li><code>git rev-parse HEAD</code> 获取最后一次提交的 Hash 值</li></ul>`,3),n=[l];function h(r,d,p,o,c,k){return a(),i("div",null,n)}const _=s(e,[["render",h]]);export{F as __pageData,_ as default};