# MySQL 用户授权

```sql
-- 创建数据库
CREATE DATABASE `database_name`;

-- 赋权
CREATE USER 'database_username'@'localhost' IDENTIFIED BY 'username_password';
GRANT ALL PRIVILEGES ON `database_name`.* TO `database_username`@'localhost';

-- 查看用户权限情况
SHOW GRANTS FOR 'database_username'@'localhost';

-- 回收权限和用户
REVOKE ALL PRIVILEGES ON `database_name`.'table_name' FROM `database_username`@'localhost';
DROP USER `database_username`@'localhost';
```