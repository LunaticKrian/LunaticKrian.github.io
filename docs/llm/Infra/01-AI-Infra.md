---
title: AI Infra
description: AI Infra 基础设施
---

# AI Infra

https://github.com/Infrasys-AI/AIInfra

AI Infra（AI 基础设施）是指为上层的 AI 算法应用提供支持的 AI 全栈底层技术，通过合理利用计算机体系结构，可以实现 AI 计算的加速和部署。

AI Infra 主要包括以下内容：

- AI 训练框架 & 推理引擎
- AI 编译 & 计算架构
- AI 硬件 & 体系结构

![preview](01-AI-Infra.assets/v2-3650875b40df5c969350319aa3351e79_r.jpg)、




--

## NVIDIA GPU 硬件

### GPU 硬件架构

- Fermi 架构：提出了首个完整的 GPU 计算架构； 
- Kepler 架构； 
- Maxwell 架构； 
- Pascal 架构：提出了 NVLink； 
- Volta 架构：将 CUDA Core 进行了拆分，分离了 FPU 和 ALU；独立线程调度：每个线程都有独立的 PC（Program Counter）和 Stack；提出了 Tensor Core：针对深度学习提供张量计算核心，专门针对卷积运算进行加速； 
- Turing 架构：提出了 RT Core（Ray Tracing Core），用于三角形与光线的求交； 
- Ampere 架构：提出 NVSwitch，单卡之间通过 NVLink 互联，多卡之间通过 NVSwitch 互联； 
- Hopper 架构。Hopper是由Nvidia开发的图形处理器微架构。

---

1. Base模型：

• Base模型通常指的是未经特定指令微调的通用型预训练模型。这类模型经过大规模文本数据的训练，能够理解和生成自然语言，但没有针对特定任务进行过细调。因此，Base模型更加通用，可以应用于各种自然语言处理任务，如文本生成、语义理解等，但可能需要用户根据具体应用场景进一步微调或适配。

2. Instruct模型：

• Instruct模型则是经过指令理解（Instruction Tuning）微调的版本，这意味着模型被进一步训练以更好地理解并执行人类提供的指令。这类模型在处理有明确指令指导的任务时表现出色，比如问答、信息检索、代码生成等。Instruct模型通过学习如何遵循人类指令，提升了模型在执行特定类型任务时的准确性和流畅性。

