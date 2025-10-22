# Pytorch 损失函数

---

## 一、分类任务损失函数

### 1.二分类任务损失函数

二分类任务常用的损失函数是二元交叉熵损失函数（Binary Cross Entropy Loss），适用于输出为0或1的任务。其公式如下：

![image-20251023001022514](11-LossFunction.assets/image-20251023001022514.png)

```python

```


### 2.多分类任务损失函数

多分类任务常用的损失函数是交叉熵损失函数（Cross Entropy Loss），适用于输出为多个类别的任务。其公式如下：