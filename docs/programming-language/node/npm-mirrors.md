# NPM 镜像

在使用 [npm](https://www.npmjs.com/) 过程中经常会遇到无法下载包的问题，通常是由于网络原因导致的。为了解决这个问题，我们可以使用 npm 镜像来加速下载。

## 基本命令

镜像的基本操作包括查看镜像、设置镜像和取消镜像。

### 查看镜像

::: code-group
```bash [node]
npm config get registry
```

```bash [yarn]
yarn config get registry
```
:::

### 设置镜像

以阿里云镜像为例。

#### 全局

设置镜像命令如下：

::: code-group
```bash [npm]
npm config set registry https://registry.npmmirror.com
```

```bash [yarn]
yarn config set registry https://registry.npmmirror.com
```
:::


#### 临时

使用下面的命令安装包时可以临时设置镜像，只对当前命令有效。

::: code-group
```bash [npm]
npm install --registry https://registry.npmmirror.com packages
```
```bash [yarn]
yarn add --registry https://registry.npmmirror.com packages
```
:::

### 重置镜像

使用下面的命令可以重置镜像为 `npm` 默认的 [registry.npmjs.com](https://registry.npmjs.org/) 镜像，`yarn` 默认的 [registry.yarnpkg.com](https://registry.yarnpkg.com) 镜像：

::: code-group
```bash [npm]
npm config delete registry
```
```bash [yarn]
yarn config delete registry
```
:::

## 相关命令

| 功能/工具名称 | yarn                                                                         | npm                      |
|---------|------------------------------------------------------------------------------|--------------------------|
| 安装所有依赖  | `yarn` / `yarn install`                                                      | `npm install`            |
| 添加依赖    | `yarn add packages`                                                          | `npm install packages`   |
| 删除依赖    | `yarn remove packages`                                                       | `npm uninstall packages` |
| 更新依赖    | `yarn upgrade`<br />`yarn upgrade --registry https://registry.npmmirror.com` | `npm update`             |
| 搜索软件包   | `—`                                                                          | `npm search packages`    |
| 清空缓存    | `yarn cache clean -f`                                                        | `npm cache clean -f`     |

## 国内镜像地址

下面整理一些国内常用的镜像地址。

### 阿里云镜像

镜像地址：`https://registry.npmmirror.com`

文档地址：[npmmirror 镜像站](https://npmmirror.com/)

> 实时同步自 [npmjs.com 官方](https://www.npmjs.com/)

::: details `.yarnrc` / `.npmrc` 配置
```text 
registry "https://registry.npmmirror.com"

sass_binary_site "https://registry.npmmirror.com/-/binary/node-sass/"
electron_mirror "https://registry.npmmirror.com/-/binary/electron/"
sqlite3_binary_host_mirror "https://registry.npmmirror.com/-/binary/sqlite3/"
profiler_binary_host_mirror "https://registry.npmmirror.com/-/binary/node-inspector/"
chromedriver_cdnurl "https://registry.npmmirror.com/-/binary/chromedriver"
sentrycli_cdnurl "https://registry.npmmirror.com/-/binary/sentry-cli"
```
:::

### 腾讯云镜像

镜像地址：`https://mirrors.cloud.tencent.com/npm/`

文档地址：[腾讯云 npm 镜像](https://mirrors.cloud.tencent.com/help/npm.html)

> 同步频率为每天一次，同步的时间为凌晨0点-2点。

### 华为云镜像

镜像地址：`https://mirrors.huaweicloud.com/repository/npm/`

文档地址：[华为云 npm 镜像](https://mirrors.huaweicloud.com/help/npm.html)

> 同步频率不详