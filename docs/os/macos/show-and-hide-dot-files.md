# 显示和隐藏 Mac 系统中的隐藏文件


## 使用快捷键

在访达中，使用下面的快捷键可以切换显示和隐藏隐藏文件：

```bash
Command + Shift + .
```

## 命令行方式

打开命令行终端，输入以下命令：

```bash
# 显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -bool true && killall Finder

# 隐藏隐藏文件
defaults write com.apple.finder AppleShowAllFiles -bool false && killall Finder
```