<template><div><h1 id="vuepress入门" tabindex="-1"><a class="header-anchor" href="#vuepress入门"><span>VuePress入门</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-环境准备">1.环境准备</router-link></li><li><router-link to="#_2-创建项目">2.创建项目</router-link></li><li><router-link to="#_3-运行项目">3.运行项目</router-link></li><li><router-link to="#_4-修改配置">4.修改配置</router-link></li><li><router-link to="#_5-生成token">5.生成Token</router-link></li><li><router-link to="#_6-设置secrets">6.设置Secrets</router-link></li><li><router-link to="#_7-提交代码">7.提交代码</router-link></li><li><router-link to="#_8-配置github-pages">8.配置Github Pages</router-link></li><li><router-link to="#补充说明">补充说明</router-link></li></ul></nav>
<h2 id="_1-环境准备" tabindex="-1"><a class="header-anchor" href="#_1-环境准备"><span>1.环境准备</span></a></h2>
<ol>
<li>需要 <code v-pre>Node.js v18.16.0+</code>，这里选择了 <code v-pre>Node.js v18.20.4(Long Term Support)</code>。<code v-pre>nvm install 18.20.4</code>，下载的时候如果报错可以将代理设为全局试试。</li>
<li><code v-pre>nvm use 18.20.4</code></li>
<li>包管理器可选npm、yarn、pnpm，官网举例用的是pnpm，这里便用它。npm install -g pnpm</li>
</ol>
<h2 id="_2-创建项目" tabindex="-1"><a class="header-anchor" href="#_2-创建项目"><span>2.创建项目</span></a></h2>
<p>通过脚手架创建项目（也可以一步步创建，<a href="https://vuepress.github.io/zh/guide/getting-started.html#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE" target="_blank" rel="noopener noreferrer">参考官网</a>）：</p>
<p><code v-pre>pnpm create vuepress project-name</code></p>
<p>这里会有一些选项，其中vite跟webpack之间我选了vite，构建过程中会询问是否添加github工作流(workflows)，这里选择生成这个文件（文件里有个branches要跟项目实际分支对应上，默认为main，我的项目是master就需要在这里改成master）。</p>
<h2 id="_3-运行项目" tabindex="-1"><a class="header-anchor" href="#_3-运行项目"><span>3.运行项目</span></a></h2>
<p><code v-pre>pnpm docs:dev</code></p>
<p>如果有警告说版本依赖不对，比如<code v-pre>vuepress</code> 是2.0.0-rc.14的，那么他需要的 <code v-pre>@vuepress/bundler-vite</code> 也是这一版本号，但是我通过脚手架安装的是2.0.0-rc.7的，那么就安装一遍那个高版本的 <code v-pre>@vuepress/bundler-vite</code> （一定要注意当前shell脚本所在目录，我第一次就搞错目录了，又删了重新执行的）</p>
<h2 id="_4-修改配置" tabindex="-1"><a class="header-anchor" href="#_4-修改配置"><span>4.修改配置</span></a></h2>
<p>VuePress 站点的基本配置文件是 <code v-pre>.vuepress/config.js</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/cli'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-vite'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'VuePress'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'VuePress教程'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">"/LearnVuePress/"</span><span class="token punctuation">,</span>       <span class="token comment">//Github 仓库名</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'/img/favicon.png'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/img/logo.gif'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"友链"</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"我的博客"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"https://fireworks99.github.io/"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"我的Github"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"https://github.com/fireworks99"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"/post/junior"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"/post/extension"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-生成token" tabindex="-1"><a class="header-anchor" href="#_5-生成token"><span>5.生成Token</span></a></h2>
<ol>
<li>
<p>点击头像，点击<code v-pre>settings</code></p>
<p><img src="@source/post/img/1.png" alt="settings"></p>
</li>
<li>
<p>在左侧最底部点击<code v-pre>Developer settings</code></p>
<p><img src="@source/post/img/2.png" alt="Developer settings"></p>
</li>
<li>
<p>找到经典(classic)的token</p>
<p><img src="@source/post/img/3.png" alt="token"></p>
</li>
<li>
<p>点击生成新token</p>
<p><img src="@source/post/img/4.png" alt="Generate new token"></p>
</li>
<li>
<p>填写名称（与项目相关即可）、有效期（怕麻烦选无期限）、作用范围（repo即可）</p>
<p><img src="@source/post/img/5.png" alt="设置token信息"></p>
</li>
<li>
<p>点击<code v-pre>Generate Token</code>，就会生成一个新的token，这里它只会出现一次，一旦刷新该网页就不见了，所以最好把它复制到你的备忘录备份一下，而且待会也是需要用到这个 Token 的。</p>
</li>
</ol>
<p>结果如下：</p>
<p><img src="@source/post/img/6.png" alt="result"></p>
<h2 id="_6-设置secrets" tabindex="-1"><a class="header-anchor" href="#_6-设置secrets"><span>6.设置Secrets</span></a></h2>
<ol>
<li>
<p>到项目仓库中，点击<code v-pre>settings =&gt; Secrets and variables =&gt; Actions =&gt; New repository secret</code></p>
<p><img src="@source/post/img/7.png" alt="New repository secret"></p>
</li>
<li>
<p>填写secret的信息，其中第二个框填写上一步生成的token</p>
<p><img src="@source/post/img/8.png" alt="secret信息"></p>
</li>
<li>
<p>点击<code v-pre>add secret</code>即可</p>
</li>
</ol>
<p>结果如下：</p>
<p><img src="@source/post/img/9.png" alt="result"></p>
<h2 id="_7-提交代码" tabindex="-1"><a class="header-anchor" href="#_7-提交代码"><span>7.提交代码</span></a></h2>
<p>提交本地代码到github仓库，这里注意分支名字问题，github默认为main分支，本地默认为master分支，要处理。</p>
<p>对应的工作流里的branches要写对。</p>
<p>首次提交不会触发CI，第二次提交会触发CI。</p>
<blockquote>
<p>补充：VuePress脚手架创建的CI工作流可直接拿来用，除了branches要注意外，其他的都不用改。</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 确保这是你正在使用的分支名称</span></span>
<span class="line">      <span class="token punctuation">-</span> master</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">permissions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span></span>
<span class="line">          <span class="token comment"># submodules: true</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span></span>
<span class="line">          pnpm run docs<span class="token punctuation">:</span>build</span>
<span class="line">          <span class="token punctuation">></span> docs/.vuepress/dist/.nojekyll</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 这是文档部署到的分支名称</span></span>
<span class="line">          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages</span>
<span class="line">          <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vuepress/dist</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-配置github-pages" tabindex="-1"><a class="header-anchor" href="#_8-配置github-pages"><span>8.配置Github Pages</span></a></h2>
<p>CI完成后会将文档部署到<code v-pre>gh-pages</code>分支</p>
<p><img src="@source/post/img/10.png" alt="gh-pages"></p>
<p>等一会儿，待 gh-pages 分支创建后，来到项目<code v-pre>Settings =&gt; Pages</code>，<code v-pre>Source</code>选择<code v-pre>Deploy from a branch</code>，<code v-pre>Branch</code>选择<code v-pre>gh-pages</code>，点击Save</p>
<p><img src="@source/post/img/11.png" alt="Deploy from a branch"></p>
<p>此时来到Actions这里发现又开始运行一个工作流</p>
<p><img src="@source/post/img/12.png" alt="Actions"></p>
<p>稍等片刻执行完毕，看到 GitHub Pages 站点启动成功，就可以访问网站了！</p>
<p><img src="@source/post/img/13.png" alt="完成"></p>
<h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2>
<p>8个月后的今天发现，如果就是把 VuePress 生成的静态网站部署到这个项目本身的 gh-pages 分支，可以直接使用 GITHUB_TOKEN，不用创建个人 token，也就是第5、6步不需要做，相应的第7步工作流如下：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 确保这是你正在使用的分支名称</span></span>
<span class="line">      <span class="token punctuation">-</span> master</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">permissions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span></span>
<span class="line">          <span class="token comment"># submodules: true</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span></span>
<span class="line">          pnpm run docs<span class="token punctuation">:</span>build</span>
<span class="line">          <span class="token punctuation">></span> docs/.vuepress/dist/.nojekyll</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> ./docs/.vuepress/dist</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


