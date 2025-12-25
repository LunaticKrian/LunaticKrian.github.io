# 长短期记忆

## 服务设计

基于 LLM 上下文工程基础，构建基于 Session 维度的长短期记忆。目的是解决 LLM 模型有限的上下文窗口。

PS：当 AGI 时代真正到来的时候，也许我们就不再需要这样的工程方式！

首先，将记忆维度区分为 Session 和 User 两个维度。Session 维度是针对 单一会话，User 维度是针对用户的。

- 会话维度

我们将构建以 Session ID 为记忆的唯一标识，围绕会话维度构建以会话特征的长短期记忆。会话特征会不断更新。当用户开启新的 Session 时，LLM 对话时
历史的 Session 记忆将不会被携带。

- 用户维度

我们将构建以 User ID 为记忆的唯一标识，围绕用户维度构建以用户特征的长短期记忆。通过 Context Engineering 的方式构建用户画像。在与 LLM 对话
过程中，用户特征会不断更新。


构建这个服务的目的是将上下文的构建交予独立的服务维护，该服务提供统一的接口实现完整的上下文管理。该服务将自动帮助模型调用构建完整的 Context：

```json
[
  { role: "system", content: "You are a helpful tutor." },
  { role: "user", content: "What is Ohm's law?" },
  { role: "assistant", content: "Ohm's law states that V = IR." },
  { role: "user", content: "Give a simple example." }
]
```

PS：目前 Open AI 提供了两种请求协议：Completion 和 Response，Response 相对较新，支持更多的 LLM 交互方式。

## 架构设计

### 数据存储

