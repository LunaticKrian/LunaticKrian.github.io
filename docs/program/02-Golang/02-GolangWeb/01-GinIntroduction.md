# Gin Web框架简介

---

Golang Web 项目包管理是基于`go mod`进行提供实现的，主要的托管方式是基于Github进行管理。所有的依赖管理都需要依赖从Github上进行拉取。

```shell
go mod tidy
```




安装`swag`（Swagger）在线API接口文档工具

```shell
go install github.com/swaggo/swag/cmd/swag@latest
```

```golang
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	// 创建一个路由
	router := gin.Default()

	// 定义一个简单的GET路由
	router.GET("/health", healthCheck)

	// 启动服务，默认监听8080端口
	err := router.Run()
	if err != nil {
		fmt.Println(err)
		return
	}
}

// healthCheck
// check the api is health
func healthCheck(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{
		"message": "ok",
	})
}
```


## Gin 中间件

- panic 是Go语言中用于表示程序发生了无法继续执行的致命错误，并导致程序崩溃的机制。 
- error 预期内的错误，是函数正常返回值的一部分。让调用者知道操作失败，并由其决定如何优雅处理（如重试、降级、返回错误信息）。使用 `if err != nil` 进行常规检查和处理。

---

Go Web 服务依赖注册流程：

数据持久层初始化 -> Service服务层初始化（依赖持久层接口）-> Handler处理器层初始化（依赖Service层接口）-> Router路由层（依赖Handler层接口）



---

## Gin Handler 注册


Golang 函数的结构体的参数交互可以使用interface来进行交互（使用interface时，无需使用指针传递，默认是应用传递）
