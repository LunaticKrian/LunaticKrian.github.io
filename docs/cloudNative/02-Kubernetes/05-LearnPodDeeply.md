# K8S 深入Pod

---

## 一、Pod 配置文件

```yaml

```

基于自定义的YAML文件创建Pod

```shell
kubectl create -f pod配置文件.yaml
```

查看节点执行信息

```shell
kubectl describe po <pod名称>
```

---

## 二、Pod 探针

Kubernetes提供了三种探针来监控Pod中容器的健康状态：`Startup Probe` 、`Liveness Probe` 和`Readiness Probe` 。这些探针帮助确保容器在运行时的健康状态，并在必要时采取相应的措施。


