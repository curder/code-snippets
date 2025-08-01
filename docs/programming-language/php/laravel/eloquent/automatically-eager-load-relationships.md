# 自动惰性加载关联关系 {#automatically-eager-load-relationships}

在 Laravel 中，Eloquent ORM 提供了自动惰性加载关联关系的功能。

通过 `Model::automaticallyEagerLoadRelationships()` 开启，这对于减少 N+1 查询问题非常有用。

```php
// bootstrap/app.php

use Illuminate\Database\Eloquent\Model; // [!code ++]

return Application::configure(basePath: dirname(__DIR__))
    // ...
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })
    ->booting(function() { // [!code ++]
        Model::automaticallyEagerLoadRelationships(); // [!code ++]
    }) // [!code ++]
    ->create();

```