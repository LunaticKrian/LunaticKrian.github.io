# MySQL5.7 JSON 空字段解析查询卡死

---

在 MyBatis 依赖下执行了如下的 SQL 语句：

```sql
select * from db_table where ext_info->'$.param_for_json' = 'all'
```

空字符串不是合法 JSON，会报错或导致内部 fallback

---

`ext_info->'$.param_for_json' = 'all'` 返回的是 JSON 类型，而不是字符串。
直接跟 'all'（字符串字面量）比较时，MySQL 会进行隐式类型转换，字段如果是 NULL 或空字符串就可能触发扫描/卡死的情况。

用 JSON_UNQUOTE(JSON_EXTRACT(...)) 把 JSON 值转成字符串再比较。

