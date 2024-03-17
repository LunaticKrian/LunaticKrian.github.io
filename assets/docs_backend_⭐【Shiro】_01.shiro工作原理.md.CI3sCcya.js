import{_ as e,c as o,o as c,a4 as a}from"./chunks/framework.BCYVvgUo.js";const d="/ai-rise-code/assets/ShiroFeatures.DfpSgh-s.png",i="/ai-rise-code/assets/551994.DuXsEfdL.jpg",r="/ai-rise-code/assets/Snipaste_2024-03-18_00-32-53.BzZLf-Ci.png",g=JSON.parse('{"title":"⭐ Shiro 工作原理","description":"","frontmatter":{},"headers":[],"relativePath":"docs/backend/⭐【Shiro】/01.shiro工作原理.md","filePath":"docs/backend/⭐【Shiro】/01.shiro工作原理.md"}'),t={name:"docs/backend/⭐【Shiro】/01.shiro工作原理.md"},h=a('<h1 id="⭐-shiro-工作原理" tabindex="-1">⭐ Shiro 工作原理 <a class="header-anchor" href="#⭐-shiro-工作原理" aria-label="Permalink to &quot;⭐ Shiro 工作原理&quot;">​</a></h1><h2 id="📌-shiro-核心功能" tabindex="-1">📌 Shiro 核心功能： <a class="header-anchor" href="#📌-shiro-核心功能" aria-label="Permalink to &quot;📌 Shiro 核心功能：&quot;">​</a></h2><p><code>Shiro</code>是一个安全框架，不提供用户以及权限的维护（用户的权限管理需要我们自己去设计对应的数据库表信息进行维护）。</p><p><img src="'+d+'" alt=""></p><ul><li><code>Anthentication</code> 认证：验证用户是否有响应的身份（进行登录）</li><li><code>Anthorization</code> 授权，即权限验证：对已经通过认证的用户检查是否具有某个权限或者角色，从而控制是否能进行某种操作。</li><li><code>Session Management</code> 会话管理：用户在认证成功之后创建会话，在没有退出之前，当前用户的所有信息都会保存在这个会话 <code>Session</code>中。（可以是普通的<code>JavaSE</code>应用，也可以是<code>Web</code>应用）</li><li><code>Cryptography</code> 加密：针对用户的敏感信息进行加密处理，<code>Shiro</code>提供了加密机制</li></ul><p>同时<code>Shiro</code>还提供了其他的特性功能支持：</p><ul><li><code>Web Support</code>：<code>Shiro</code>提供了过滤器，可以通过过滤器拦截<code>Web</code>请求来处理<code>Web</code>应用的访问控制</li><li><code>Caching</code> 缓存支持：<code>Shiro</code>可以缓存用户信息以及用户的角色权限信息，可以提高执行效率</li><li><code>Concurreny</code>：<code>Shiro</code> 支持多线程应用</li><li><code>Testing</code>：<code>Shiro</code>提供测试支持</li><li><code>Run As</code>：允许用户以另外一个身份去访问</li><li><code>Remember Me</code>：<code>Shiro</code>提供了记住权限身份信息的功能</li></ul><hr><h2 id="📌-shiro-核心组件" tabindex="-1">📌 Shiro 核心组件： <a class="header-anchor" href="#📌-shiro-核心组件" aria-label="Permalink to &quot;📌 Shiro 核心组件：&quot;">​</a></h2><p><img src="'+i+'" alt=""></p><h3 id="_1-subject" tabindex="-1">1.Subject： <a class="header-anchor" href="#_1-subject" aria-label="Permalink to &quot;1.Subject：&quot;">​</a></h3><p><code>Subject</code>表示待授权和认证的用户。</p><h3 id="_2-security-manager" tabindex="-1">2.Security Manager： <a class="header-anchor" href="#_2-security-manager" aria-label="Permalink to &quot;2.Security Manager：&quot;">​</a></h3><p><code>Security Manager </code> 是<code>Shiro</code> 框架的核心，<code>Shiro</code>通过<code>Security Manager </code> 来进行内部实例的管理，并通过它来提供各种安全管理的各种服务。 <code>Security Manager </code>中包含以下组件：</p><ul><li><code>Authenticator</code> ：认证器</li><li><code>Authorizer</code> ：授权器</li><li><code>Session Manager</code>：会话管理器</li><li><code>Caching Manager</code>：缓存管理器</li></ul><h3 id="_3-realms" tabindex="-1">3.Realms： <a class="header-anchor" href="#_3-realms" aria-label="Permalink to &quot;3.Realms：&quot;">​</a></h3><p><code>Realms</code>相当于<code>Shiro</code>进行认证和授权的数据源，充当了<code>Shiro</code>与安全数据（数据库数据等）之间的 &quot;桥梁&quot; 或者 &quot;连接器&quot;。当用户进行认证（登录）和授权（访问控制）验证时，<code>Shiro</code>会在应用配置的<code>Realm</code>中查找用户及权限信息。</p><hr><h2 id="📌-shiro-认证授权流程" tabindex="-1">📌 Shiro 认证授权流程： <a class="header-anchor" href="#📌-shiro-认证授权流程" aria-label="Permalink to &quot;📌 Shiro 认证授权流程：&quot;">​</a></h2><p>通过<code>Subject.login(token)</code>进行登录，就会将<code>Token</code>中包含用户信息（账号和密码）传递给<code>Security Manager</code>。<code>Security Manager</code>就会调用<code>Authenticator</code>进行身份认证。<code>Authenticator</code>把<code>Token</code>传递给对应的<code>Realm</code>。<code>Realm</code>更具得到的<code>Token</code>，调用<code>doGetAuthenticationInfo()</code>方法进行认证，如果认知失败就会抛出异常提示认证器。异常信息会一层一层向上抛出直到返回<code>Subject</code>，当<code>Subject</code>抛出异常则表示认证失败。</p><p><img src="'+r+'" alt=""></p><hr>',22),s=[h];function n(l,u,S,_,p,m){return c(),o("div",null,s)}const f=e(t,[["render",n]]);export{g as __pageData,f as default};
