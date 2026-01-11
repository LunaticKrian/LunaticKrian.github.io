# LlamaIndex RAG

```python
from llama_index.core import Settings, SimpleDirectoryReader, VectorStoreIndex
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.llms.huggingface import HuggingFaceLLM

# 加载本地模型
llm = HuggingFaceLLM(model_name="/Users/krian/PycharmProjects/llm-study/06-Model-Deploy/model/Qwen/Qwen3-0.6B",
                     tokenizer_name="/Users/krian/PycharmProjects/llm-study/06-Model-Deploy/model/Qwen/Qwen3-0.6B",
                     model_kwargs={
                         "trust_remote_code": True
                     }, tokenizer_kwargs={
        "trust_remote_code": True
    })
Settings.llm = llm

# 初始化一个Embedding模型
embedding = HuggingFaceEmbedding(
    model_name="/Users/krian/PycharmProjects/llm-study/17-LlamaIndex-Demo/model/sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2")
# 将创建的嵌入式模型赋值给全局设置的embed_model属性，这样在后续的索引构建过程中，就会使用这个模型
Settings.embed_model = embedding

# 从指定目录加载数据到内存中
documents = SimpleDirectoryReader("/Users/krian/PycharmProjects/llm-study/17-LlamaIndex-Demo/data").load_data()
# print(documents)

index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine()
response = query_engine.query("What's my name?")
print(f"LLM Response: {response}")
```





---

