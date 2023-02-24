# 获取 git 提交的所有文件

```bash
git diff-tree -r --no-commit-id --name-only {commitId} | xargs tar -rf files.tar

# 获取最后一次提交时变更的所有文件
git diff-tree -r --no-commit-id --name-only `git rev-parse HEAD` | xargs tar -rf files.tar
```

- `{commandId}` 提交历史记录的 Hash 值
- `files.tar` 将变更的文件打包到当前目录下的 `files.tar` 文件中
- `git rev-parse HEAD` 获取最后一次提交的 Hash 值