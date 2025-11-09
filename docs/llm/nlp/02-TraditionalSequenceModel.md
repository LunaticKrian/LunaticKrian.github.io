# 传统序列模型

---

## 一、RNN

在自然语言中，词语的顺序对于理解句子的含义至关重要。虽然词向量能够表示词语的语义，但它本身并不包含词语之间的顺序信息。

为了解决这一问题，研究者提出RNN（Recurrent Neural Network，循环神经网络）。
RNN 会逐个读取句子中的词语，并在每一步结合当前词和前面的上下文信息，不断更新对句子的理解。通过这种机制，RNN 能够持续建模上下文，从而更准确地把握句子的整体语义。因此RNN曾是序列建模领域的主流模型，被广泛应用于各类NLP任务。

说明：

随着技术的发展，RNN已经逐渐被结构更灵活、计算效率更高的Transformer 模型所取代，后者已经成为当前自然语言处理的主流方法。
尽管如此，RNN 仍然具有重要的学习价值。它所体现的“循环建模上下文”的思想，不仅为 LSTM 和 GRU 等改进模型奠定了基础，也有助于我们更好地理解 Transformer 等更复杂的架构。

### 1.RNN 结构

RNN（循环神经网络）的核心结构是一个具有循环连接的隐藏层，它以时间步（time step）为单位，依次处理输入序列中的每个 token。
在每个时间步，RNN 接收当前 token 的向量和上一个时间步的隐藏状态（即隐藏层的输出），计算并生成新的隐藏状态，并将其传递到下一时间步。

#### (1) RNN 基础结构

![img.png](02-TraditionalSequenceModel.assets/img.png)

![img_1.png](02-TraditionalSequenceModel.assets/img_1.png)

![img_3.png](02-TraditionalSequenceModel.assets/img_3.png)

![img_4.png](02-TraditionalSequenceModel.assets/img_4.png)

#### (2) RNN 多层结构



#### (3) RNN 双向结构



#### (4) RNN 多层双向结构

![img_5.png](02-TraditionalSequenceModel.assets/img_5.png)

---

### 2.RNN API

```python
from torch import nn

rnn = nn.RNN()
```




---

### 3.RNN 案例

数据集：https://huggingface.co/datasets/Jax-dan/HundredCV-Chat

![img_6.png](02-TraditionalSequenceModel.assets/img_6.png)

PS：使用HuggingFace提供的API直接使用数据集：

```python
from datasets import load_dataset

ds = load_dataset("Jax-dan/HundredCV-Chat")
```

:::info

数据集的文件后缀是 `.jsonl` ，表示这个文件中的数据一行为一个JSON字符串

![img_7.png](02-TraditionalSequenceModel.assets/img_7.png)

:::

项目结构：

<div align="center">

![img_8.png](02-TraditionalSequenceModel.assets/img_8.png)

</div>

#### (1) 数据预处理

Pandas 如何读写JSON文件？

https://pandas.pydata.org/docs/user_guide/io.html#writing-json

https://pandas.pydata.org/docs/user_guide/io.html#io-json-reader


```shell
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple scikit-learn
```

```shell
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple jieba       
```

---

## 二、LSTM

---

## 三、GRU

