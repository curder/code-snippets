# 监听数据库语句 {#monitor-database-statements}

使用 `DB::listen` 方法来监听数据库查询语句。

```php {5,7,19}
<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Events\QueryExecuted;

class AppServiceProvider extends ServiceProvider
{
    // ...

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (! app()->isLocal()) {
            return;
        }
        DB::listen(fn(QueryExecuted $e) => logger($e->toRawSql()));
    }
}

```

