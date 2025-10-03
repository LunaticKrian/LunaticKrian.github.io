# K8S 集群服务搭建

---

Minikube 安装





Kubadm 安装



---

## Kubectl 工具

Kubectl 是 Kubernetes 的命令行工具，允许你运行命令来与 Kubernetes 集群进行通信。你可以使用 kubectl 来部署应用程序、检查和管理集群资源以及查看日志。

### 资源操作

**资源类型与别名**

| 资源名称   | 资源别名（缩写） | 备注信息 |
| :--------- | ---------------- | -------- |
| pods       | po               |          |
| deployment | deploy           |          |
| service    | svc              |          |
| namespace  | ns               |          |
| nodes      | no               |          |



#### 创建对象



#### 查看信息

```shell
kubectl get <资源类型>
```


获取pod运行详细信息

```shell
kubectl get po -o wide
```

获取deployment配置yaml详细信息

```shell
kubectl get deploy <deployment配置名> -o yaml
```

#### 删除资源

```shell
kubectl delete <资源类型> <资源名称>
```


---

## API 接口

Kubernetes API 是 Kubernetes 的核心组件，提供了一个 RESTful 接口，用于与集群进行交互。所有的操作（如创建、更新、删除资源）都是通过 Kubernetes API 来完成的。

