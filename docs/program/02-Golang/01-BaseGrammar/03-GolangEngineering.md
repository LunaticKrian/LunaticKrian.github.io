# Golang 工程化

---

## Go Modules 模块化管理

Go modules 是 Go 语言的依赖解决方案，发布于 Go1.11，成长于 Go1.12，丰富于 Go1.13，正式于 Go1.14 推荐在生产上使用。

### go mod 命令

| 命令            | 作用                             |
| --------------- | -------------------------------- |
| go mod init     | 生成 go.mod 文件                 |
| go mod download | 下载 go.mod 文件中指明的所有依赖 |
| go mod tidy     | 整理现有的依赖                   |
| go mod graph    | 查看现有的依赖结构               |
| go mod edit     | 编辑 go.mod 文件                 |
| go mod vendor   | 导出项目所有的依赖到vendor目录   |
| go mod verify   | 校验一个模块是否被篡改过         |
| go mod why      | 查看为什么需要依赖某模块         |

### god mod 环境变量

使用 `go env` 查询当前 Golang 编译环境变量信息：

```text
GO111MODULE="auto"
GOPROXY="https://proxy.golang.org,direct"
GONOPROXY=""
GOSUMDB="sum.golang.org"
GONOSUMDB=""
GOPRIVATE=""
...
```

#### GO111MODULE

Go语言提供了 GO111MODULE这个环境变量来作为 Go modules 的开关，其允许设置以下参数：

- auto：只要项目包含了 go.mod 文件的话启用 Go modules，目前在 Go1.11 至 Go1.14 中仍然是默认值。 
- on：启用 Go modules，推荐设置，将会是未来版本中的默认值。 
- off：禁用 Go modules，不推荐设置。

```shell
go env -w GO111MODULE=on
```





## Goroutine 协程





## channel 管道


## Select 选择器



---

## 工程案例 IM通信

