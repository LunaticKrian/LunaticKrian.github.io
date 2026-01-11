# 上下文工程

Context Engineering（上下文工程），这个术语在前段时间突然流行起来。起初我也质疑这是否又是一次炒概念？它与我们熟知的 Prompt Engineering、RAG 甚至 MCP (Model Context Protocol) 之间，存在着怎样的关联？

Context Engineering 的概念主要源自 Tobi Lütke 和 Andrej Karpathy 的推特：“It describes the core skill better: the art of providing all the context for the task to be plausibly solvable by the LLM.” （提供所有上下文的艺术，以使任务能够被 LLM 合理地解决） && "When in every industrial-strength LLM app, context engineering is the delicate art and science of filling the context window with just the right information for the next step." （上下文工程是一门微妙的艺术与科学，旨在在上下文窗口中填入恰到好处的信息，为下一步推理做准备）

通过对上下文工程这一概念的溯源与分析，本文认为，将上下文工程简单等同于“高级的提示工程”或“复杂的 RAG”是一种误读。它更应被理解为一套“哲学”和“准则”。尽管其核心理念看似直观，但它正是在 Agentic System 发展过程中，为应对工业级应用复杂性而逐步沉淀出的关键准则。对于任何致力于构建鲁棒、可扩展 AI 应用的开发者而言，理解并掌握这套准则至关重要。（这个话题还挺符合我的品味，它适合任何水平的人阅读）



## Reference

- [Anthropic] https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents


