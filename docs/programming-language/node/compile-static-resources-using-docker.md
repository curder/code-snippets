# 使用 docker 编译静态资源

```bash
docker run -it --rm --name docker-node-compile-assets -v "$PWD":/home/node/app -w /home/node/app node:16.19 yarn && yarn prod
```

- `--rm` 容器退出时自动移除
- `-v` 挂载目录
- `-w` 工作目录
