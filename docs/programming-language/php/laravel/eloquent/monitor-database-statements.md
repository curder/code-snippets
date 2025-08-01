# 监听数据库语句 {#monitor-database-statements}

使用 `DB::listen` 方法来监听数据库查询语句。

```php
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Events\QueryExecuted;

DB::listen(fn(QueryExecuted $e) => dump($e->toRawSql()));
```

