# 监听数据库语句 {#monitor-database-statements}

使用 `DB::listen` 方法来监听数据库查询语句。

::: code-group
```php {18-20} [>= Laravel 10]
<?php

namespace App\Providers;

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
        if (app()->isLocal()) {
            \Illuminate\Support\Facades\DB::listen(
                fn (\Illuminate\Database\Events\QueryExecuted $e) => logger($e->toRawSql())
            );
        }
    }
}

```
```php {11-22} [< Laravel 10]
<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        if (app()->isLocal()) {
            \Illuminate\Support\Facades\DB::listen(function (\Illuminate\Database\Events\QueryExecuted $query) {
                $sql = $query->sql;
                $bindings = $query->bindings;
                
                // 简单的替换（适用于简单场景）
                foreach ($bindings as $binding) {
                    $value = is_numeric($binding) ? $binding : "'{$binding}'";
                    $sql = preg_replace('/\?/', $value, $sql, 1);
                }
                
                \Log::info($sql, ['time' => $query->time . 'ms']);
            });
        }
    }
}
```
:::