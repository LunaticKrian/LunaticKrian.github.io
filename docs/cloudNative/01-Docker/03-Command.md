# Docker 命令

---

## Docker 容器命令

### 1.初始化容器

#### (1) 启动交互式容器

新建并启动一个交互式容器

```shell
docker run -it --name 容器名称 镜像名称:标签 /bin/bash
```

- `--name`：指定容器名称

- `-i`：交互式操作，保持标准输入打开（interactive）
- `-t`：分配一个伪终端（tty）（启动交互式容器）

- `-p`：指定端口映射（publish）
- `-P`：随机端口映射（publish all）

| 参数                            | 说明信息                        |
|-------------------------------|-----------------------------|
| -p hostPort:containerPort     | 端口映射 -p 8080:80             |
| -p ip:hostPort:containerPort  | 配置监听地址 -p 127.0.0.1:8080:80 |
| -p ip::containerPort          | 随机分配端口 -p 127.0.0.1::80     |
| -p hostPort:containerPort:udp | 指定协议 -p 8080:80:tcp         |
| -p 81:80 -p 443:443           | 指定多个端口映射                    |

- `镜像名称:标签`：指定使用的镜像及其标签（版本），如果不指定标签，默认使用 `latest` 标签

- `/bin/bash`：指定容器启动后执行的命令

#### (2) 启动守护式容器

大部分场景下，容器都是以守护式运行的方式启动的：

```shell    
docker run -d --name 容器名称 镜像名称:标签
```

- `-d`：后台运行容器（detached）并返回容器ID（启动守护模式容器）

:::info

⚠️ 注意：Docker 容器后台运行，必须有一个前台进程，否则容器会自动退出。容器运行的命令如果不是那些一直挂起的命令（如：top，tail），就会自动退出。

:::

---

### 2.查看容器进程

```shell
docker ps -a
```

- `-a`：显示所有容器（包括未运行的容器）

---

### 3.退出当前容器

- run 进入的容器，直接 `exit` 退出，容器停止运行
- run 进入的容器，`Ctrl + P + Q` 退出，容器继续运行

---

### 4.重启指定容器

```shell
docker start 容器名称或ID
```

---

### 5.停止指定容器

```shell
docker stop 容器名称或ID
```

强行停止指定容器

```shell
docker kill 容器名称或ID
```

---

### 6.删除停止容器

```shell
docker rm 容器名称或ID
```

PS：不能删除正在运行的容器，删除前需要先停止容器，否则会返回错误信息

```text
Error response from daemon: You cannot remove a running container. Stop the container before attempting removal or use -f
```

强制删除：

```shell
docker rm -f 容器名称或ID
```

---

### 7.运行中容器 ‼️

#### (1) 查看容器日志

```shell
docker logs 容器名称或ID
```

#### (2) 查看容器内进程

```shell
docker top 容器名称或ID
```

#### (3) 查看容器内部细节

```shell
docker inspect 容器名称或ID
```

#### (4) 进入运行中容器

```shell
docker exec -it 容器名称或ID /bin/bash
```

- exec 进入的容器，直接 `exit` 退出，容器继续运行

重新进入容器：

```shell
docker attach 容器名称或ID
```

:::info

exec 和 attach 的区别：

- exec：进入容器后，打开一个新的终端会话，容器内原有的终端会话不受影响，exit 后，容器内原有的终端会话继续运行
- attach：进入容器后，连接到容器内原有的终端会话，容器内原有的终端会话会被占用，exit 后，容器内原有的终端会话也会退出

PS：推荐使用 exec 进入容器，因为 exec 进入容器后，容器内原有的终端会话不受影响，exit 后，容器内原有的终端会话继续运行

:::

---

### 8.容器文件操作

#### (1) 复制文件到容器

```shell   
docker cp 本地文件路径 容器名称或ID:容器内路径
```

#### (2) 复制文件从容器到本地

```shell
docker cp 容器名称或ID:容器内路径 本地文件路径
```

---

### 9.导出和导入容器

#### (1) 导出容器

导出指定的容器为一个 tar 包，这个 tar 包包含了容器的文件系统内容，但不包含容器的元数据（如：环境变量、端口映射等）（镜像）

```shell
docker export -o 导出文件名.tar 容器名称或ID
```

#### (2) 导入容器

将导出的 tar 包导入为一个新的镜像（镜像）

```shell
docker import 导入文件名.tar 新镜像名称:标签
```