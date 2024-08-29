import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.DjyxGeXd.js";const F=JSON.parse('{"title":"MySQL 用户授权","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/grant-privileges-to-user.md","filePath":"database/mysql/grant-privileges-to-user.md","lastUpdated":1677219237000}'),h={name:"database/mysql/grant-privileges-to-user.md"},t=n('<h1 id="mysql-用户授权" tabindex="-1">MySQL 用户授权 <a class="header-anchor" href="#mysql-用户授权" aria-label="Permalink to &quot;MySQL 用户授权&quot;">​</a></h1><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建数据库</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATABASE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">database_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">`;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 赋权</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">database_username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IDENTIFIED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;username_password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GRANT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALL PRIVILEGES </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `database_name`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `database_username`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 查看用户权限情况</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOW GRANTS </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;database_username&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 回收权限和用户</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REVOKE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALL PRIVILEGES </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `database_name`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;table_name&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `database_username`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DROP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> USER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `database_username`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>',2),l=[t];function k(e,p,E,r,d,g){return a(),i("div",null,l)}const o=s(h,[["render",k]]);export{F as __pageData,o as default};