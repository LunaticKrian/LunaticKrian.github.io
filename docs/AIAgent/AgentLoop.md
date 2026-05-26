# Agent 开发范式

---

Agent = While Loop + Tools，这是最核心的抽象。无论多复杂的 Agent，本质上都是：

```TS
while (stop_reason === "tool_use") {
    response = await callLLM(messages)
    toolResults = await executeTools(response.tool_calls)
    messages.push(response, toolResults)
}
```

1. Loop循环，只要stop_reason为tool_use就进入迭代。
2. 迭代第一步：拿着所有的context请求模型（context包含用户的Query History、Skills Description、Tools Definition等等）
3. 迭代第二步：如果模型返回的响应内容中包含工具调用，则进行工具调用的具体执行
4. 迭代第三步：将工具调用结果压入context中，进行下一轮迭代，直到模型决策不再进行工具调用

> 每次工具调用都必须经过权限检查。这不是事后加的安全层，而是从设计之初就融入架构的核心机制。
> Context Window 有限，Claude Code 用三层压缩策略精心管理每一个 token 的使用。
> 从 API 流式响应到工具执行，`async function*` 是 Claude Code 的核心编程范式，实现了流式处理和惰性求值。

---



