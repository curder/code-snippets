import{_ as s,c as a,o as n,d as l}from"./app.3d758414.js";const i=JSON.parse('{"title":"MySQL 用户授权","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/grant-privileges-to-user.md","lastUpdated":1677219237000}'),p={name:"database/mysql/grant-privileges-to-user.md"},o=l(`<h1 id="mysql-用户授权" tabindex="-1">MySQL 用户授权 <a class="header-anchor" href="#mysql-用户授权" aria-hidden="true">#</a></h1><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 创建数据库</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> \`</span><span style="color:#82AAFF;">database_name</span><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 赋权</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">USER</span><span style="color:#A6ACCD;"> &#39;</span><span style="color:#82AAFF;">database_username</span><span style="color:#A6ACCD;">&#39;@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED </span><span style="color:#F78C6C;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">username_password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> ALL PRIVILEGES </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">database_name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">database_username</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 查看用户权限情况</span></span>
<span class="line"><span style="color:#A6ACCD;">SHOW GRANTS FOR </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">database_username</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 回收权限和用户</span></span>
<span class="line"><span style="color:#F78C6C;">REVOKE</span><span style="color:#A6ACCD;"> ALL PRIVILEGES </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">database_name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">table_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">database_username</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">USER</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">database_username</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,C,D,y,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
