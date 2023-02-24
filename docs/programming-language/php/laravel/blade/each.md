# @each 渲染集合视图

可以使用 Blade 的 `@each` 指令将循环和视图的包含组合到一行中：

```php
@each('view.name', $users, 'user')

// 提供一个当 users 为空时候的视图模版 view.empty
@each('view.name', $users, 'user', 'view.empty')
```

`@each` 指令参数说明：
- 第一个参数是为数组或集合中的每个元素呈现的视图模版
- 第二个参数是您希望迭代的数组或集合
- 而第三个参数是将分配给视图中当前迭代的变量名称
- 第四个参数如果给定数组或集合为空，此参数确定将展示的视图模版