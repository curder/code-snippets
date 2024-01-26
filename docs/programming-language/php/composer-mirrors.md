# Composer 镜像

由于默认情况下执行 composer 各种命令是去国外的 composer 官方镜像源获取需要安装的具体软件信息，所以在不使用代理的情况下，从国内访问国外服务器的速度相对比较慢。

## 基本命令

镜像的基本操作，包括查看镜像、设置镜像和取消镜像等。

### 查看镜像

```bash
composer config -gl # 查看全局镜像配置

composer config -l # 查看当前项目镜像配置
```

### 设置镜像

- 命令行模式

    ```bash
    composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/ # 配置全局镜像

    composer config repo.packagist composer https://mirrors.aliyun.com/composer/ #  配置当前项目镜像
    ```

- 修改 `composer.json` 文件

    ```json
    {
        "repositories":[
            {
                "description":"阿里云镜像",
                "type":"composer",
                "url":"https://mirrors.aliyun.com/composer/",
                "canonical":false
            }
        ]
    }
    ```

    > 配置阿里云和官方两个源，阿里云镜像站下载文件出错时再从官方源上下载。


### 取消镜像

```bash
# 全局配置
composer config -g --unset repos.packagist

# 当前项目配置
composer config --unset repos.packagist
```
取消镜像后，默认使用官方源 `https://repo.packagist.org`。

## 相关命令

### 下载 `composer` 命令行工具

::: code-group
```bash [阿里云]
# 1. 下载
wget https://mirrors.aliyun.com/composer/composer.phar

# 2. 赋权
chmod +x composer.phar

# 3. 安装
mv composer.phar /usr/local/bin/composer
```

```bash [腾讯云]
# 1. 下载
wget https://mirrors.tencent.com/composer/composer.phar

# 2. 赋权
chmod +x composer.phar

# 3. 安装
mv composer.phar /usr/local/bin/composer
```
:::

### 调试

`composer` 命令安装扩展包时增加 `-vvv` 可输出详细的信息，可以查看配置的镜像是否生效，命令如下：

```bash
composer require alibabacloud/sdk -vvv
```

### 诊断

使用下面的命令可以诊断系统以识别常见错误：

```bash
composer diagnose
```

### 更新 `composer` 版本

```bash
# 更新到最新版
composer self-update

# 更新到1.x版本
composer self-update --1

# 更新到指定版本
composer self-update 2.5.4
```

更多版本可以查看官方地址：[composer download](https://getcomposer.org/download/)

### 更新 composer.lock 源

若项目之前已通过其他源安装，则需要更新 `composer.lock` 文件，执行命令：

```bash
composer update --lock
```

### 清除缓存 

通过下面的命令可以清除缓存：

```bash
composer clear-cache
```

## 国内镜像地址

### 阿里云

镜像地址：`https://mirrors.aliyun.com/composer/`

文档地址：[aliyun composer mirror](https://developer.aliyun.com/composer)

> 实时同步自 [Packagist 官方](https://packagist.org/mirrors)

### 腾讯云

镜像地址：`https://mirrors.tencent.com/composer/`

文档地址：[tencent composer mirror](https://mirrors.cloud.tencent.com/help/composer.html)

> 同步频率为每天一次，同步的时间为凌晨0点-2点。

### 上海交通大学

镜像地址: `https://packagist.mirrors.sjtug.sjtu.edu.cn/`

文档地址：[sjtu composer mirror](https://packagist.mirrors.sjtug.sjtu.edu.cn/)

> 更新频率为 每 4800 秒从 [packagist.org](https://packagist.org/mirrors) 同步一次。
