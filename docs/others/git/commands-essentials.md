# Git 命令

## 设置本地仓库

| 命令                | 说明    |
|-------------------|-------|
| `git init`        | 初始化仓库 |
| `git clone <url>` | 克隆仓库  |

## 配置 Git

| 命令                                         | 说明             |
|--------------------------------------------|----------------|
| `git config --global user.name <name>`     | 设置用户名          |
| `git config --global user.email <email>`   | 设置用户邮箱         |
| `git config --global color.ui true`        | 设置 Git 命令行颜色显示 |
| `git config --global core.editor <editor>` | 设置默认文本编辑器      |
| `git config --list`                        | 查看配置信息         |

## 基本快照

| 命令                          | 说明             |
|-----------------------------|----------------|
| `git add <file>`            | 添加文件到暂存区       |
| `git add .`                 | 添加所有文件到暂存区     |
| `git commit -m "<message>"` | 提交暂存区文件并添加提交信息 |
| `git status`                | 查看仓库状态         |
| `git diff`                  | 查看文件差异         |
| `git diff --staged`         | 查看暂存区文件差异      |
| `git log`                   | 查看提交历史         |
| `git rm <file>`             | 删除文件           |

## 分支和合并

| 命令                          | 说明      |
|-----------------------------|---------|
| `git branch`                | 查看分支列表  |
| `git branch <new-branch>`   | 创建分支    |
| `git checkout <branch>`     | 切换分支    |
| `git checkout -b <branch>`  | 创建并切换分支 |
| `git merge <branch>`        | 合并分支    |
| `git branch -d <branch>`    | 删除分支    |
| `git branch -D <branch>`    | 强制删除分支  |
| `git branch -m <old> <new>` | 重命名分支   |

## 撤销更改

| 命令                          | 说明             |
|-----------------------------|----------------|
| `git reset --hard HEAD`     | 撤销所有更改并重置到最新提交 |
| `git checkout -- <file>`    | 放弃对文件的修改       |
| `git revert <commit>`       | 撤销指定提交         |
| `git reset <commit>`        | 重置到指定提交        |
| `git reset --hard <commit>` | 重置到指定提交并删除工作区  |

## 远程仓库

| 命令                                    | 说明               |
|---------------------------------------|------------------|
| `git remote add <name> <url>`         | 添加远程仓库           |
| `git remote -v`                       | 查看远程仓库信息         |
| `git fetch`                           | 拉取远程仓库更新         |
| `git pull`                            | 拉取远程仓库更新并合并到当前分支 |
| `git push origin <branch>`            | 推送本地分支到远程仓库      |
| `git push origin --delete <branch>`   | 删除远程分支           |
| `git remote remove <name>`            | 删除远程仓库           |
| `git remote set-url <name> <url>`     | 修改远程仓库地址         |
| `git remote update <name>`            | 更新远程仓库           |
| `git remote show <name>`              | 查看远程仓库详细信息       |
| `git remote prune <name>`             | 删除远程仓库中已经不存在的分支  |
| `git remote rename <old> <new>`       | 重命名远程仓库          |
| `git remote set-head <name> <branch>` | 设置远程仓库的默认分支      |

## 隐藏更改

| 命令                                  | 说明            |
|-------------------------------------|---------------|
| `git stash`                         | 暂存当前工作区更改     |
| `git stash list`                    | 查看暂存列表        |
| `git stash apply <stash>`           | 应用指定暂存更改      |
| `git stash pop <stash>`             | 应用并删除指定暂存更改   |
| `git stash drop <stash>`            | 删除指定暂存更改      |
| `git stash clear`                   | 清空暂存列表        |
| `git stash branch <branch> <stash>` | 从指定暂存创建新分支    |
| `git stash show <stash>`            | 查看指定暂存更改的详细信息 |

## 标签

| 命令                                     | 说明          |
|----------------------------------------|-------------|
| `git tag`                              | 查看所有标签      |
| `git tag <tagname>`                    | 创建标签        |
| `git tag -a <tagname> -m "message"`    | 创建带有说明的标签   |
| `git tag -d <tagname>`                 | 删除标签        |
| `git show <tagname>`                   | 查看标签详细信息    |
| `git push origin <tagname>`            | 推送标签到远程仓库   |
| `git push origin --tags`               | 推送所有标签到远程仓库 |
| `git fetch --tags`                     | 拉取所有标签      |
| `git checkout <tagname>`               | 切换到指定标签     |
| `git tag -d <tagname>`                 | 删除本地标签      |
| `git push origin :refs/tags/<tagname>` | 删除远程标签      |

## 查看差异

| 命令                  | 说明                |
|---------------------|-------------------|
| `git diff`          | 查看工作区和暂存区之间的差异    |
| `git diff HEAD`     | 查看工作区和最近一次提交之间的差异 |
| `git diff <branch>` | 查看工作区和指定分支之间的差异   |

## 检查和比较

| 命令                                           | 说明               |
|----------------------------------------------|------------------|
| `git show <commit>`                          | 查看提交详细信息         |
| `git log --oneline --graph --decorate --all` | 查看提交历史和分支图       |
| `git blame <file>`                           | 查看文件每一行最后修改的提交信息 |
| `git shortlog`                               | 查看提交历史           |

## 协作和审查

| 命令                           | 说明             |
|------------------------------|----------------|
| `git fetch <remote>`         | 拉取远程仓库的更新      |
| `git pull <remote> <branch>` | 拉取远程分支的更新      |
| `git push <remote> <branch>` | 推送本地分支的更新到远程仓库 |
| `git cherry-pick <commit>`   | 合并指定提交到当前分支    |

## 清理

| 命令              | 说明          |
|-----------------|-------------|
| `git clean -f`  | 删除未跟踪的文件    |
| `git clean -fd` | 删除未跟踪的文件和目录 |
| `git gc`        | 清理仓库，回收空间   |

