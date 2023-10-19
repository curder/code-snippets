import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.ad3f3418.js";const _=JSON.parse('{"title":"MySQL 用户授权","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/grant-privileges-to-user.md","filePath":"database/mysql/grant-privileges-to-user.md","lastUpdated":1677219237000}'),p={name:"database/mysql/grant-privileges-to-user.md"},o=l('<h1 id="mysql-用户授权" tabindex="-1">MySQL 用户授权 <a class="header-anchor" href="#mysql-用户授权" aria-label="Permalink to &quot;MySQL 用户授权&quot;">​</a></h1><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">-- 创建数据库</span></span>\n<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DATABASE</span><span style="color:#E1E4E8;"> `</span><span style="color:#B392F0;">database_name</span><span style="color:#E1E4E8;">`;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">-- 赋权</span></span>\n<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">USER</span><span style="color:#E1E4E8;"> &#39;</span><span style="color:#B392F0;">database_username</span><span style="color:#E1E4E8;">&#39;@</span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;"> IDENTIFIED </span><span style="color:#F97583;">BY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;username_password&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#F97583;">GRANT</span><span style="color:#E1E4E8;"> ALL PRIVILEGES </span><span style="color:#F97583;">ON</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">`database_name`</span><span style="color:#E1E4E8;">.</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">`database_username`</span><span style="color:#E1E4E8;">@</span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">-- 查看用户权限情况</span></span>\n<span class="line"><span style="color:#E1E4E8;">SHOW GRANTS </span><span style="color:#F97583;">FOR</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;database_username&#39;</span><span style="color:#E1E4E8;">@</span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">-- 回收权限和用户</span></span>\n<span class="line"><span style="color:#F97583;">REVOKE</span><span style="color:#E1E4E8;"> ALL PRIVILEGES </span><span style="color:#F97583;">ON</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">`database_name`</span><span style="color:#E1E4E8;">.</span><span style="color:#9ECBFF;">&#39;table_name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">`database_username`</span><span style="color:#E1E4E8;">@</span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">USER</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">`database_username`</span><span style="color:#E1E4E8;">@</span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">-- 创建数据库</span></span>\n<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DATABASE</span><span style="color:#24292E;"> `</span><span style="color:#6F42C1;">database_name</span><span style="color:#24292E;">`;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">-- 赋权</span></span>\n<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">USER</span><span style="color:#24292E;"> &#39;</span><span style="color:#6F42C1;">database_username</span><span style="color:#24292E;">&#39;@</span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;"> IDENTIFIED </span><span style="color:#D73A49;">BY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;username_password&#39;</span><span style="color:#24292E;">;</span></span>\n<span class="line"><span style="color:#D73A49;">GRANT</span><span style="color:#24292E;"> ALL PRIVILEGES </span><span style="color:#D73A49;">ON</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`database_name`</span><span style="color:#24292E;">.</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`database_username`</span><span style="color:#24292E;">@</span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">-- 查看用户权限情况</span></span>\n<span class="line"><span style="color:#24292E;">SHOW GRANTS </span><span style="color:#D73A49;">FOR</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;database_username&#39;</span><span style="color:#24292E;">@</span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">-- 回收权限和用户</span></span>\n<span class="line"><span style="color:#D73A49;">REVOKE</span><span style="color:#24292E;"> ALL PRIVILEGES </span><span style="color:#D73A49;">ON</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`database_name`</span><span style="color:#24292E;">.</span><span style="color:#032F62;">&#39;table_name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`database_username`</span><span style="color:#24292E;">@</span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;">;</span></span>\n<span class="line"><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">USER</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`database_username`</span><span style="color:#24292E;">@</span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div>',2),e=[o];function t(c,r,E,y,F,i){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{_ as __pageData,A as default};
