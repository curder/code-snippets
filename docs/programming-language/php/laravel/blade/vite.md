# Vite 静态资源替换

```php
# 替换规则
src="../../assets/([^"]*)"

# 替换为
src="{{ Vite::asset('resources/$1') }}"
```
