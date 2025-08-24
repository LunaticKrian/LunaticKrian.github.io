/**
 * 定义接受数据结构
 */
interface SkillItemInfo {
    skillName: string;
    skillDescription: string;
}

export let skillInfo: Array<SkillItemInfo> = [
    {
        skillName: "计算机基础：",
        skillDescription: "熟悉 HTTP(S) 、TCP/IP 协议，了解常用数据结构算法，操作系统进程通信和内存管理机制。熟练使用 Linux，了解 Linux 常用指令，使用 Linux 进行项目部署、服务管理。"
    },
    {
        skillName: "大模型（LLM）：",
        skillDescription: "具备大模型（LLM）应用开发与集成经验（Spring AI），了解 MCP、RAG等大模型应用工程技术，熟悉模型微调、推理部署及相关生态工具。"
    },
    {
        skillName: "Java：",
        skillDescription: "熟练掌握 Java 基础，熟悉集合、并发组件。熟悉 JDK 8 Lambda 表达式，Stream 流操作 新特性。"
    },
    {
        skillName: "JVM：",
        skillDescription: "熟悉 JVM 内存区域划分、垃圾回收器、GC 算法、类加载机制。了解常用性能调优手段和工具。"
    },
    {
        skillName: "数据库：",
        skillDescription: "关系型数据库：熟悉 MySQL 常见 SQL 优化方案、索引类别与底层实现、日志机制、锁机制和事务。非关系型数据库：熟悉 Redis 数据类型以及对应数据结构，了解持久化方案、内存管理、读写策略、缓存穿透/雪崩/击穿。"
    },
    {
        skillName: "框架：",
        skillDescription: "：熟练使用 Spring，SpringBoot，Mybatis 等主流开源框架，熟悉 IoC、AOP 技术。"
    },
    {
        skillName: "分布式：",
        skillDescription: "了解 SpringCloud、Spring Cloud Alibaba 常用组件功能以及使用场景。了解服务注册与发现、负载均衡、熔断等技术。"
    },
    {
        skillName: "中间件：",
        skillDescription: "了解 Nginx 反向代理、负载均衡等特性。了解主流消息中间件 Apache Kafka、Rabbit MQ 和 Rocket MQ 特性，使用方式以及应用场景。"
    },
    {
        skillName: "工具：",
        skillDescription: "熟练使用 Git 版本控制工具进行团队协作和代码管理。熟悉 Maven 项目构建方式。了解 Docker 容器化技术，了解 CI/CD 流水线搭建与维护。"
    },
    {
        skillName: "前端：",
        skillDescription: "熟悉 HTML、CSS、JavaScript、TypeScript 基础，熟悉 React（于2025年放弃Vue生态，转向React生态），能够进行前端页面开发与调试。"
    }
]

/**
 * 定义个人优势信息
 */
export let expertiseInfo: Array<string> = [
    "良好的编程习惯，Code Review，有代码洁癖，对自己的编码规范要求严格。",
    "良好的问题解决能力，能快速分析，能在压力下保持冷静并找到有效的解决方案。",
    "良好的沟通协调能力，能够快速融入完成团队之间的协调配合。",
    "良好的学习能力，乐于学习新技术，尝试新领域新挑战。"
]