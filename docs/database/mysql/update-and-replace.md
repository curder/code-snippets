# 查找和替换文本

```sql
UPDATE `table_name` SET `field_name` = 
    replace(`field_name`, '[string_to_find]', '[string_to_replace]');
```

- `table_name` 待修改的表名
- `filed_name` 替换的字段名
- `[string_to_find]` 待查找到字符串
- `[string_to_replace]` 替换的字符串