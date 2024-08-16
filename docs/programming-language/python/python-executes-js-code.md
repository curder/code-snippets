# Python 执行 JS 代码

[`PyExecJS`](https://pypi.org/project/PyExecJS/) 是一个Python库，用于在Python中执行JavaScript代码。

## 安装

```bash
pip install PyExecJS
```

## 示例代码

```python
import execjs

# 定义JavaScript代码
js_code = """
  function hello(name) {
      return `Hello ${name}!`;
  }
  """

# 编译JavaScript代码
context = execjs.compile(js_code)

# 调用JavaScript函数
result = context.call('hello', 'Python')
print(result)  # 输出：Hello Python!
```