import{_ as s,c as e,o as a,a4 as i}from"./chunks/framework.BCYVvgUo.js";const l="/ai-rise-code/assets/Snipaste_2024-04-05_10-29-05.C9MsEJqI.png",n="/ai-rise-code/assets/Snipaste_2024-04-05_10-42-22.Bsn30tX4.png",t="/ai-rise-code/assets/DevGuide_image00.CLgApXoc.png",o="/ai-rise-code/assets/Snipaste_2024-04-05_11-01-24.BEKP0vOA.png",c="/ai-rise-code/assets/Snipaste_2024-04-05_11-59-06.BsNkSra7.png",p="/ai-rise-code/assets/Snipaste_2024-04-05_11-58-22.BWVYt4V2.png",v=JSON.parse('{"title":"Flume 基础","description":"","frontmatter":{},"headers":[],"relativePath":"docs/bigdata/⭐【Flume】/01.Flume基础.md","filePath":"docs/bigdata/⭐【Flume】/01.Flume基础.md"}'),d={name:"docs/bigdata/⭐【Flume】/01.Flume基础.md"},h=i('<h1 id="flume-基础" tabindex="-1">Flume 基础 <a class="header-anchor" href="#flume-基础" aria-label="Permalink to &quot;Flume 基础&quot;">​</a></h1><h2 id="📌-flume-概述" tabindex="-1">📌 Flume 概述： <a class="header-anchor" href="#📌-flume-概述" aria-label="Permalink to &quot;📌 Flume 概述：&quot;">​</a></h2><h3 id="_1-flume-定位" tabindex="-1">1.Flume 定位： <a class="header-anchor" href="#_1-flume-定位" aria-label="Permalink to &quot;1.Flume 定位：&quot;">​</a></h3><p>官方站点：<a href="https://flume.apache.org/" target="_blank" rel="noreferrer">Welcome to Apache Flume — Apache Flume</a></p><p>官方文档：<a href="https://flume.apache.org/releases/content/1.11.0/FlumeUserGuide.html#taildir-source" target="_blank" rel="noreferrer">Flume 1.11.0 User Guide — Apache Flume</a></p><p><img src="'+l+'" alt=""></p><p><code>Flume </code>是 <code>Cloudera </code>提供的一种高可用、高可靠、分布式的海量日志采集、聚合和传输的系统。<code>Flume </code>基于流式架构，灵活简单。</p><p><img src="'+n+'" alt=""></p><p><code>Flume </code>最主要的作用是，实时读取服务器本地磁盘的数据，将数据写到 <code>HDFS</code>。</p><h3 id="_2-flume-架构" tabindex="-1">2.Flume 架构： <a class="header-anchor" href="#_2-flume-架构" aria-label="Permalink to &quot;2.Flume 架构：&quot;">​</a></h3><p><img src="'+t+'" alt=""></p><ul><li><p><code>Agent</code>：</p><p><code>Agent </code>是一个 <code>JVM </code>进程，它以事件的形式将数据从源头送至目的。<code>Agent </code>主要有三个组成部分，<code>Source</code>、<code>Channel</code>、<code>Sink</code>。</p></li><li><p><code>Source</code>： <code>Source </code>是负责接收数据到 <code>Flume Agent</code> 的组件。<code>Source </code>组件可以处理各种类型、各种格式的日志数据，包括 <code>avro</code>、<code>thrif</code>、<code>exec</code>、<code>jms</code>、<code>spooling directory</code>、<code>netcat</code>、<code>sequence generator</code>、<code>syslog</code>、<code>http</code>、<code>legacy</code>。</p></li><li><p><code>Channel</code>： <code>Channel </code>是位于 <code>Source </code>和 <code>Sink </code>之间的缓冲区。因此，<code>Channel </code>允许 <code>Source</code> 和 <code>Sink </code>运作在不同的速率上。<code>Channel </code>是线程安全的，可以同时处理几个 <code>Source </code>的写入操作和几个 <code>Sink </code>的读取操作。 <code>Flume </code>常用的 <code>Channel</code>：<code>Memory Channel</code> 和 <code>File Channel</code>。</p><ul><li><code>Memory Channel</code>：一种基于内存的<code>Channel</code>，它将数据存储在内存中。它的优点是速度快，适用于数据量较小的情况。然而，由于数据存储在内存中，内存消耗可能会较大。可能由于程序死亡、机器宕机或者重启导致数据丢失。</li><li><code>File Channel</code>：是一种基于文件的<code>Channel</code>，它将数据存储在文件系统中。它的优点是能够处理大量的数据，且数据持久化，但速度可能相对较慢。</li></ul></li><li><p><code>Sink</code>： <code>Sink </code>不断地轮询 <code>Channel </code>中的事件且批量移除它们，并将这些事件批量写入到存储或索引系统、或者被发送到另一个 <code>Flume Agent</code>。 <code>Sink</code> 组件的目的地包括 <code>hdfs</code>、<code>logger</code>、<code>avro</code>、<code>thrif</code>、<code>file</code>、<code>HBase</code>、<code>solr</code>、自定义。</p></li><li><p><code>Event</code>： <code>Flume </code>数据传输的基本单元，以 <code>Event</code> 的形式将数据从源头送至目的地。<code>Event</code> 由 <code>Header </code>和 <code>Body </code>两个部分组成。<code>Header</code> 用来存放该 <code>Event </code>的一些属性，为 <code>K-V </code>结构；<code>Body </code>用来存放该条数据，形式为字节数组。</p></li></ul><h2 id="📌-flume-安装" tabindex="-1">📌 Flume 安装： <a class="header-anchor" href="#📌-flume-安装" aria-label="Permalink to &quot;📌 Flume 安装：&quot;">​</a></h2><p>Flume 官方下载地址：<a href="https://flume.apache.org/download.html" target="_blank" rel="noreferrer">Download — Apache Flume</a></p><p>Flume 文件列表地址：<a href="https://archive.apache.org/dist/flume/" target="_blank" rel="noreferrer">Index of /dist/flume (apache.org)</a></p><p><img src="'+o+'" alt=""></p><ol><li><strong>使用<code>wget</code>指令在服务器上下载<code>Flume</code>安装文件：</strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://dlcdn.apache.org/flume/1.11.0/apache-flume-1.11.0-bin.tar.gz</span></span></code></pre></div><p>如果出现以下错误信息，表示需要更新证书：</p><div class="language-reStructuredText vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">reStructuredText</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ERROR: cannot verify dlcdn.apache.org&#39;s certificate, issued by ‘/C=US/O=Let&#39;s Encrypt/CN=R3’: Issued certificate has expired.</span></span></code></pre></div><p>执行命令更新证书后，再执行<code>wget</code>命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ca-certificates</span></span></code></pre></div><ol start="2"><li><strong>解压安装文件：</strong></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tar -xvzf apache-flume-1.11.0-bin.tar.gz -C flume</span></span></code></pre></div><ol start="3"><li><strong>将 <code>flume/conf</code> 目录下的 <code>flume-env.sh.template</code> 文件修改为 <code>flume-env.sh</code></strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flume-env.sh.template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flume-env.sh</span></span></code></pre></div><ol start="4"><li><strong>配置<code> flume-env.sh</code> 文件，将 <code>LInux </code>系统的 <code>jdk </code>的路径写到其中（配置<code>JAVA_HOME</code>）：</strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flume-env.sh</span></span></code></pre></div><p>在配置文件中添加如下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JAVA_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/local/java/jdk1.8.0_151</span></span></code></pre></div><blockquote><p>注意：为了兼容<code>Hadoop 3.1.3</code>版本（其他版本可能也需要）需要将<code>flume/lib</code>目录下的<code>guava-11.0.2.jar</code>删除（删除低版本的<code>jar</code>包）。</p></blockquote><ol start="5"><li><p><strong>修改<code>log4j</code>日志输出配置文件<code>log4j.properties</code>（新版本是<code>XML</code>）：</strong></p><p>指定日志输出的文件路径：</p></li></ol><p><img src="'+c+`" alt=""></p><h2 id="📌-flume-案例" tabindex="-1">📌 Flume 案例： <a class="header-anchor" href="#📌-flume-案例" aria-label="Permalink to &quot;📌 Flume 案例：&quot;">​</a></h2><p>官方文档案例：<a href="https://flume.apache.org/releases/content/1.11.0/FlumeUserGuide.html#starting-an-agent" target="_blank" rel="noreferrer">Flume 1.11.0 User Guide — Apache Flume</a></p><p>使用<code>Flume</code>监听一个端口，收集该端口数据，并打印到控制台。</p><ol><li><strong>安装<code>netcat</code>工具：</strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netcat</span></span></code></pre></div><ol start="2"><li><strong>在 <code>flume </code>目录下创建 <code>job </code>文件夹并进入 <code>job </code>文件夹：</strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job</span></span></code></pre></div><ol start="3"><li><strong>在 <code>job </code>文件夹下创建 <code>FLume Agent</code> 的配置文件 <code>flume-netcat-logger.conf </code></strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flume-netcat-logger.conf</span></span></code></pre></div><ol start="4"><li><strong>在该配置文件中添加如下内容（核心重点）</strong></li></ol><div class="language-properties vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 声明变量，给Flume的核心组件进行命名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a1 为 agent 的名称，a1 也是一个变量的命名，需要在Flume启动时使用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.sources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = r1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.sinks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = k1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.channels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = c1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置Source组件（上面配置的r1）：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.sources.r1.type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = netcat</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.sources.r1.bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = localhost</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.sources.r1.port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 44444</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置Sink数据下游处理：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.sinks.k1.type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = logger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置Channel，capacity单位是event事件，transactionCapacity事务容量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.channels.c1.type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = memory</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.channels.c1.capacity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.channels.c1.transactionCapacity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 绑定关系（注意）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一个source可以向多个channel发送数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一个channel可以向多个sink发送数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一个sink只能接收一个channel发送的数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.sources.r1.channels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = c1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">a1.sinks.k1.channel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = c1</span></span></code></pre></div><ol start="5"><li><strong>启动<code>Flume</code>（两种启动命令）</strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin/flume-ng</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> agent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --conf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --conf-file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job/flume-netcat-logger.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Dflume.root.logger=INFO,console</span></span></code></pre></div><p>简写：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin/flume-ng</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> agent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> job/flume-netcat-logger.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Dflume.root.logger=INFO,console</span></span></code></pre></div><ul><li><code>-c</code>：指定<code>Flume</code>配置文件存放目录。</li><li><code>-f</code>：指定<code>Flume</code>配置文件</li><li><code>-n</code>：指定<code>agent</code>名称， <code>a1</code>就是配置文件中配置的<code>agent</code>的名称。</li></ul><ol start="6"><li><strong>使用 netcat 工具向本机 44444端口发送内容</strong>：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 44444</span></span></code></pre></div><ol start="7"><li><p><strong>在 FLume 监听页面观察接收数据情况：</strong></p><p>数据的接收是基于<code>Event</code>事件进行接收。</p></li></ol><p><img src="`+p+'" alt=""></p><h2 id="📌-flume-实时文件监控" tabindex="-1">📌 Flume 实时文件监控： <a class="header-anchor" href="#📌-flume-实时文件监控" aria-label="Permalink to &quot;📌 Flume 实时文件监控：&quot;">​</a></h2><p>官方文档地址：<a href="https://flume.apache.org/releases/content/1.11.0/FlumeUserGuide.html#taildir-source" target="_blank" rel="noreferrer">Flume 1.11.0 User Guide — Apache Flume</a></p><p>可以监控多个目录</p><p>Flume 支持断点续传</p><p>这个功能主要是由配置文件中<code>positionFile</code>配置项提供了记录读取文件的记录信息。默认会把读取的记录信息保存到<code>~/.flume/taildir_position.json</code>文件中，可以自定义设置。</p><p>HDFS Sink：</p>',59),r=[h];function k(g,u,F,m,y,b){return a(),e("div",null,r)}const f=s(d,[["render",k]]);export{v as __pageData,f as default};
