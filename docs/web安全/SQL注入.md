## 产生

主要是 SQL 的拼接，拼接的 SQL 字段由前端传递，由此导致 SQL 注入攻击。

## 防御

1. 关闭详细的错误输出
2. 对明确的字段类型进行验证（number string...）
3. 转义 SQL 关键字
4. 使用 ORM 也就是把 sql 的操作变为对象的操作（mysql 就是 sequelize）避免 SQL 的拼接。
