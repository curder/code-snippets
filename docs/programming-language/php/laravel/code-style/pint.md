# pint 代码风格

[Laravel Pint](https://laravel.com/docs/master/pint#main-content) 支持开箱即用的代码风格检查和修复。

通过在项目根目录下添加 `pint.json` 来制定自定义的代码风格，更多自定义风格配置可以[查看这里](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/blob/master/doc/rules/index.rst)。

文件内容如下：

```yml
{
    "preset": "laravel",
    "rules": {
        "ordered_imports": {
            "sort_algorithm": "length",
            "imports_order": [
                "const",
                "class",
                "function"
            ]
        }
    }
}
```

`ordered_imports` 格式化 PHP 中类的 `use` 语句，排序的规则使用字符长度，导入顺序按照 `const`、`class` 和 `function`。