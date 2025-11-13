# Golang 开发环境

---

这里推荐 `Jetbrains` 公司提供的 `GoLand` 集成开发环境：https://www.jetbrains.com/zh-cn/go/

![img.png](01-GolangDevEnv.assets/img.png)

---

Go1.14版本之后，都推荐使用go mod模式来管理依赖了，也不再强制我们把代码必须写在GOPATH下面的src目录了，你可以在你电脑的任意位置编写go代码。

默认GoPROXY配置是：`GOPROXY=https://proxy.golang.org,direct`，
由于国内访问不到 `https://proxy.golang.org` 所以我们需要换一个PROXY，这里推荐使用`https://goproxy.io` 或 `https://goproxy.cn` 。

可以执行下面的命令修改GOPROXY：

```shell
go env -w GOPROXY=https://goproxy.cn,direct
```

