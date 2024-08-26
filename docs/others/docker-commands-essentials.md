# Docker 命令

## 版本和信息

| 命令                 | 说明       |
|--------------------|----------|
| `docker --version` | Docker版本 |
| `docker info`      | Docker信息 |

## 容器 Container

| 命令                                        | 说明           |
|-------------------------------------------|--------------|
| `docekr stats`                            | 容器资源使用情况     |
| `docker ps`                               | 查看运行中的容器     |
| `docker ps -a`                            | 查看所有容器       |
| `docker run <image>`                      | 从镜像运行容器      |
| `docker run -d <image>`                   | 从镜像运行容器（后台）  |
| `docker run --name ‹name> <image>`        | 从镜像运行容器并命名   |
| `docker stop <container>`                 | 停止容器         |
| `docker start <container>`                | 启动容器         |
| `docker restart <container>`              | 重启容器         |
| `docker rm <container>`                   | 删除容器         |
| `docker exec -it <container> /bin/bash`   | 进入容器         |
| `docker logs <container>`                 | 查看容器日志       |
| `docker top <container>`                  | 查看容器进程       |
| `docker inspect <container>`              | 查看容器详细信息     |
| `docker cp <container>:<path> <path>`     | 从容器复制文件到主机   |
| `docker cp <path> <container>:<path>`     | 从主机复制文件到容器   |
| `docker commit <container> <image>`       | 从容器创建镜像      |
| `docker export <container> -o <file.tar>` | 导出容器为 tar 文件 |

## 镜像 Images

| 命令                                      | 说明                |
|-----------------------------------------|-------------------|
| `docker images`                         | 查看所有镜像            |
| `docker pull <image>`                   | 从 Docker Hub 拉取镜像 |
| `docker push <name>:<tag>`              | 推送镜像到 Docker Hub  |
| `docker rmi <image>`                    | 删除镜像              |
| `docker build -t <name>:<tag> <path>`   | 从 Dockerfile 构建镜像 |
| `docker tag <image> <new_name>:<tag>`   | 使用新名称或版本标记镜像      |
| `docker save <image> -o <path>`         | 保存镜像到文件           |
| `docker load -i <path>`                 | 从文件加载镜像           |
| `docker inspect <image>`                | 查看镜像详细信息          |
| `docker import <file.tar> <image_name>` | 导入 tar 文件为镜像      |

## 网络 Network

| 命令                                                        | 说明         |
|-----------------------------------------------------------|------------|
| `docker network ls`                                       | 查看所有网络     |
| `docker network create <name>`                            | 创建网络       |
| `docker network inspect <network>`                        | 查看网络详细信息   |
| `docker network rm <network>`                             | 删除网络       |
| `docker network connect <network> <container>`            | 连接容器到网络    |
| `docker network disconnect <network> <container>`         | 从网络断开容器    |
| `docker network disconnect --force <network> <container>` | 强制从网络断开容器  |
| `docker network prune`                                    | 删除所有未使用的网络 |

## 卷 Volumes

| 命令                                     | 说明        |
|----------------------------------------|-----------|
| `docker volume ls`                     | 查看所有卷     |
| `docker volume create <name>`          | 创建卷       |
| `docker volume inspect <volume>`       | 查看卷详细信息   |
| `docker volume rm <volume>`            | 删除卷       |
| `docker volume prune`                  | 删除所有未使用的卷 |
| `docker run -v <volume>:/path <image>` | 在容器中挂载卷   |
| `docker volume mount <volume>`         | 挂载卷       |
| `docker volume unmount <volume>`       | 卸载卷       |
| `docker volume update <volume>`        | 更新卷       |

## 日志 Logs

| 命令                                        | 说明          |
|-------------------------------------------|-------------|
| `docker logs <container>`                 | 查看容器日志      |
| `docker logs -f <container>`              | 查看容器日志并实时更新 |
| `docker logs --tail <number> <container>` | 查看容器日志的最后几行 |

## 清理 Docker

| 命令                          | 说明                   |
|-----------------------------|----------------------|
| `docker system prune`       | 清理未使用的镜像、容器、卷和网络     |
| `docker system prune -a`    | 清理所有未使用的镜像、容器、卷和网络   |
| `docker system prune -f`    | 强制清理未使用的镜像、容器、卷和网络   |
| `docker system prune -a -f` | 强制清理所有未使用的镜像、容器、卷和网络 |
| `docker container prune`    | 清理未使用的容器             |
| `docker image prune`        | 清理未使用的镜像             |
| `docker volume prune`       | 清理未使用的卷              |
| `docker network prune`      | 清理未使用的网络             |
| `docker system df`          | 查看Docker资源使用情况       |


## Docker Compose

| 命令                    | 说明        |
|-----------------------|-----------|
| `docker-compose up`   | 启动并运行所有服务 |
| `docker-compose down` | 停止并删除所有服务 |
| `docker-compose ps`   | 查看所有服务状态  |
| `docker-compose logs` | 查看所有服务日志  |



