# SSH 端口转发

SSH 端口转发（SSH 隧道技术）允许将端口从一台计算机重定向到另一台计算机。 

它是一种通过本地和远程服务器之间的加密 SSH 连接安全传输数据的方法。

## 本地端口转发

本地转发（local forwarding）指的是，创建一个本地端口，将发往该端口的所有通信都通过 SSH 服务器，转发到指定的远程服务器的端口。这种情况下，SSH 服务器只是一个作为跳板的中介，用于连接本地计算机无法直接连接的远程服务器。本地转发是在本地计算机建立的转发规则。

它的语法如下，其中会指定本地端口（local_port）、SSH 服务器（ssh_server）、远程服务器（remote_host）和远程端口（remote_port）

```bash
ssh -L -N -f [local_port]:[remote_host]:[remote_port] [username]@[ssh_server]
```

上面命令中，有三个配置参数。

- `-L`：转发本地端口。
- `-N`：不发送任何命令，只用来建立连接。没有这个参数，会在 SSH 服务器打开一个 Shell。
- `-f`：将 SSH 连接放到后台。没有这个参数，暂时不用 SSH 连接时，终端会失去响应。

例如，假设用户想要访问位于 IP 地址为 `192.168.1.100` 的远程服务器上的 SSH 服务（端口 22），而远程服务器 `192.168.1.100` 对端口 `22` 的直接访问被阻止。

用户可以使用本地端口转发将本地 `2022` 端口重定向到远程服务器的 `22` 端口。

```bash
ssh -L -N 2022:192.168.1.100:22 user@remote_server
```

如果经常使用本地转发，可以将设置写入 SSH 客户端的用户个人配置文件（`~/.ssh/config`）。

```text
Host test.example.com
LocalForward client-IP:client-port server-IP:server-port
```

## 远程转发

远程转发指的是在远程 SSH 服务器建立的转发规则。

它跟本地转发正好反过来。建立本地计算机到远程 SSH 服务器的隧道以后，本地转发是通过本地计算机访问远程 SSH 服务器，而远程转发则是通过远程 SSH 服务器访问本地计算机。它的命令格式如下。

```bash
ssh -R [remote_port]:[target_host]:[target_port] -N remote-host
```
上面命令中，`-R` 参数表示远程端口转发，remote-port是远程 SSH 服务器的端口，target-host和target-port是目标服务器及其端口，remote-host 是远程 SSH 服务器。

远程转发主要针对内网的情况。

### 内网转发

内网某台服务器 `localhost` 在 80 端口开了一个服务，可以通过远程转发将这个 80 端口，映射到具有公网 IP 地址的 `my.public.server` 服务器的 8080 端口，使得访问`my.public.server:8080` 这个地址，就可以访问到那台内网服务器的 80 端口。

```bash
ssh -R 8080:localhost:80 -N my.public.server
```

上面命令是在内网 `localhost` 服务器上执行，建立从 `localhost` 到 `my.public.server` 的 SSH 隧道。

运行以后，用户访问 `my.public.server:8080`，就会自动映射到 `localhost:80`。
