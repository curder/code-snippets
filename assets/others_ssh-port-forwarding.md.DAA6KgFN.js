import{_ as s,c as e,o as a,a2 as t}from"./chunks/framework.DjyxGeXd.js";const S=JSON.parse('{"title":"SSH 端口转发","description":"","frontmatter":{},"headers":[],"relativePath":"others/ssh-port-forwarding.md","filePath":"others/ssh-port-forwarding.md","lastUpdated":1703157990000}'),i={name:"others/ssh-port-forwarding.md"},o=t(`<h1 id="ssh-端口转发" tabindex="-1">SSH 端口转发 <a class="header-anchor" href="#ssh-端口转发" aria-label="Permalink to &quot;SSH 端口转发&quot;">​</a></h1><p>SSH 端口转发（SSH 隧道技术）允许将端口从一台计算机重定向到另一台计算机。</p><p>它是一种通过本地和远程服务器之间的加密 SSH 连接安全传输数据的方法。</p><h2 id="本地端口转发" tabindex="-1">本地端口转发 <a class="header-anchor" href="#本地端口转发" aria-label="Permalink to &quot;本地端口转发&quot;">​</a></h2><p>本地转发（local forwarding）指的是，创建一个本地端口，将发往该端口的所有通信都通过 SSH 服务器，转发到指定的远程服务器的端口。这种情况下，SSH 服务器只是一个作为跳板的中介，用于连接本地计算机无法直接连接的远程服务器。本地转发是在本地计算机建立的转发规则。</p><p>它的语法如下，其中会指定本地端口（local_port）、SSH 服务器（ssh_server）、远程服务器（remote_host）和远程端口（remote_port）</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [local_port]:[remote_host]:[remote_port] [username]@[ssh_server]</span></span></code></pre></div><p>上面命令中，有三个配置参数。</p><ul><li><code>-L</code>：转发本地端口。</li><li><code>-N</code>：不发送任何命令，只用来建立连接。没有这个参数，会在 SSH 服务器打开一个 Shell。</li><li><code>-f</code>：将 SSH 连接放到后台。没有这个参数，暂时不用 SSH 连接时，终端会失去响应。</li></ul><p>例如，假设用户想要访问位于 IP 地址为 <code>192.168.1.100</code> 的远程服务器上的 SSH 服务（端口 22），而远程服务器 <code>192.168.1.100</code> 对端口 <code>22</code> 的直接访问被阻止。</p><p>用户可以使用本地端口转发将本地 <code>2022</code> 端口重定向到远程服务器的 <code>22</code> 端口。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2022:192.168.1.100:22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@remote_server</span></span></code></pre></div><p>如果经常使用本地转发，可以将设置写入 SSH 客户端的用户个人配置文件（<code>~/.ssh/config</code>）。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Host test.example.com</span></span>
<span class="line"><span>LocalForward client-IP:client-port server-IP:server-port</span></span></code></pre></div><h2 id="远程转发" tabindex="-1">远程转发 <a class="header-anchor" href="#远程转发" aria-label="Permalink to &quot;远程转发&quot;">​</a></h2><p>远程转发指的是在远程 SSH 服务器建立的转发规则。</p><p>它跟本地转发正好反过来。建立本地计算机到远程 SSH 服务器的隧道以后，本地转发是通过本地计算机访问远程 SSH 服务器，而远程转发则是通过远程 SSH 服务器访问本地计算机。它的命令格式如下。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [remote_port]:[target_host]:[target_port] -N remote-host</span></span></code></pre></div><p>上面命令中，<code>-R</code> 参数表示远程端口转发，remote-port是远程 SSH 服务器的端口，target-host和target-port是目标服务器及其端口，remote-host 是远程 SSH 服务器。</p><p>远程转发主要针对内网的情况。</p><h3 id="内网转发" tabindex="-1">内网转发 <a class="header-anchor" href="#内网转发" aria-label="Permalink to &quot;内网转发&quot;">​</a></h3><p>内网某台服务器 <code>localhost</code> 在 80 端口开了一个服务，可以通过远程转发将这个 80 端口，映射到具有公网 IP 地址的 <code>my.public.server</code> 服务器的 8080 端口，使得访问<code>my.public.server:8080</code> 这个地址，就可以访问到那台内网服务器的 80 端口。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:localhost:80</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my.public.server</span></span></code></pre></div><p>上面命令是在内网 <code>localhost</code> 服务器上执行，建立从 <code>localhost</code> 到 <code>my.public.server</code> 的 SSH 隧道。</p><p>运行以后，用户访问 <code>my.public.server:8080</code>，就会自动映射到 <code>localhost:80</code>。</p>`,25),p=[o];function h(l,r,n,d,c,k){return a(),e("div",null,p)}const u=s(i,[["render",h]]);export{S as __pageData,u as default};
