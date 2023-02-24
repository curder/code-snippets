# Laravel 中的重定向

```php
// 重定向到指定uri
redirect('/uri');
redirect()->to('/uri');
Redirect::to('/uri');

// 重定向到路由
redirect()->route('route.name');
to_route('route.name');
Redirect::route('route.name');

// 重定向到上一步
back();
redirect()->back();
redirect()->to(request()->header('referer'))
Redirect::back();
```
