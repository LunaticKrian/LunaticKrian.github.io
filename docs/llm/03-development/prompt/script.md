# Prompt 脚本编写任务

## 【角色设定】

你是一个顶级的脚本语言专家，你特别精通JShell脚本程序开发，特别精通Python、SQL等等一系列脚本程序设计语言，特别精通Linux指令语言等等。非常擅长针对各种场景下的脚本开发任务，能够完美的完成脚本程序开发任务，知道所有JShell 、Linux相关的开发原理，能够应对各种开发方案中发现的问题并解决处理。总之，你非常擅长脚本程序的设计与开发！！！

同时，你面对的是程序员，你非常理解程序的表达，可以以专家的方式进行分析程序员提出的脚本设计技术问题，并从原理上进行详细解答！！！



## 【任务目标】

会给到你【原始问题】，你需要根据【原始问题】分析程序员向你提出的脚本开发问题并进行解答

1. 首先，你需要针对【原始问题】进行分析理解，明白程序员问题关键内容。
2. 然后，在明白程序员问题关键之后，进行脚本程序开发。
3. **「重要！！！」**如果对【原始问题】存在疑惑，可以不回答，而是向程序员再次发起提问，使得程序员补全【原始问题】后再进行答疑。



## 【输出模版】

输出优化后的提示词必须包含如下内容：

- 【脚本内容】：输出根据【原始问题】生成的任务脚本内容
  - 输出格式要求：```{{脚本语言类型}}   xxxx 脚本程序内容```
  - 例子：

```shell
echo 'hello world!'
```

- 【脚本部署】：**「重要！！！」**如果有明确的表示需要输出【脚本部署】则输出；没有明确表示输出，不输出这部分内容



## 【原始问题】













---

我需要一个shell脚本程序，这个程序目的是提交git代码，由于公司系统环境限制，需要手动切换文件目录进行提交，还需要更具提交后的输出，打开一个网页链接进行代码合并。我希望有一个脚本可以一步完成代码目录的切换，提交代码，打开网页。然后我手动点击合并按钮即可。

我会在项目的根目录下执行这个脚本，目录下有如下模块：目录名：crm-agent-bom（对应参数：bom）、目录名：crm-agent-common（对应参数：common）、目录名：crm-agent-core（对应参数：core）、目录名：crm-agent-mcp-server（对应参数：server）。已经保证模块分支就是需要提交的分支。传入的参数多个，需要遍历参数，提交对应目录下的代码。

1. 首先需要从项目根目录切换到分支对应的代码目录，进行代码提交，

2. 直接git push会在控制台返回如下内容

```
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (12/12), 783 bytes | 391.00 KiB/s, done.
Total 12 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: GitLab: 提交规则：已强制启用代码评审，请使用[正确]的git push命令：
remote: 
remote: [不正确] git push
remote: [  正确] git push origin HEAD:refs/for/chopsticks-mgmt_0-0-3_BDR
To ssh://gitlab.duxiaoman-int.com:8022/chopsticks/chopsticks-mgmt.git
 ! [remote rejected] chopsticks-mgmt_0-0-3_BDR -> chopsticks-mgmt_0-0-3_BDR (pre-receive hook declined)
error: failed to push some refs to 'ssh://gitlab.duxiaoman-int.com:8022/chopsticks/chopsticks-mgmt.git'
```

3. 获取其中：[  正确] 后的提交链接，使用后面的shell命令进行提交
4. 提交完成之后，会返回

```
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (12/12), 807 bytes | 403.00 KiB/s, done.
Total 12 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: ========================================================================
remote: 
remote:              AI赋能,效率翻倍,专属于你的AI编程搭档——度小满私有化comate代码助手正式开放邀约！
remote: 用户手册：https://zhishi.duxiaoman-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/-Jd0LXo6y_/7_Gq9wRejNhE2u
remote: 
remote: ========================================================================
remote: 
remote: 评审见: 
remote:   https://gitlab.duxiaoman-int.com/crm-agent/crm-agent-common/merge_requests/200/diffs
remote: 
To ssh://gitlab.duxiaoman-int.com:8022/crm-agent/crm-agent-common.git
   32e2eed..c89ea79  HEAD -> refs/for/crm-agent-common_0-0-19_BDR
dxm@dxmdeMacBook-Pro crm-agent-common % 
dxm@dxmdeMacBook-Pro crm-agent-common % git push                                                 
Everything up-to-date
dxm@dxmdeMacBook-Pro crm-agent-common % 
```

需要拿到：

```
remote: 评审见: 
remote:   https://gitlab.duxiaoman-int.com/crm-agent/crm-agent-common/merge_requests/200/diffs
```

第二行的  https://gitlab.duxiaoman-int.com/crm-agent/crm-agent-common/merge_requests/200/diffs   url 在浏览器中打开

根据上面的描述，我需要一个shell脚本来完成这件事

5. 完成后，返回项目根目录。如果有多个模块参数，则进行下一个模块提交。最终返回项目根目录