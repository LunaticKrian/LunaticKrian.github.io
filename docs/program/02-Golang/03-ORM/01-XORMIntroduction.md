# XORM ORM框架 简介

---

Golang Mod 安装 XORM 框架：

```shell
go get xorm.io/xorm
```

安装 MySQL 引擎：

```shell
go get -u github.com/go-sql-driver/mysql
```

---

创建 MySQL 数据库连接：

```golang
import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"xorm.io/xorm"
)

// CreateDBEngine 创建数据库连接
func CreateDBEngine() *xorm.EngineGroup {

	// 定义数据库连接配置（基于EngineGroup多数据库源）
	connections := []string{
		"root:root@(127.0.0.1:3306)/test_db?charset=utf8",        // 第一个默认是master
		"root:root@(127.0.0.1:3306)/test_db_backup?charset=utf8", // 第二个开始都是slave
	}

	engine, err := xorm.NewEngineGroup("mysql", connections)
	if err != nil {
		fmt.Println(err)
	}

	err = engine.Ping()
	if err != nil {
		fmt.Println(err)
	}

	return engine
}
```

---

