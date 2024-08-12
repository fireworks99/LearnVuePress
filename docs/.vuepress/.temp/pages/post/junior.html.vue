<template><div><h1 id="_1-环境准备" tabindex="-1"><a class="header-anchor" href="#_1-环境准备"><span>1.环境准备</span></a></h1>
<ol>
<li>需要 <code v-pre>Node.js v18.16.0+</code>，这里选择了 <code v-pre>Node.js v18.20.4(Long Term Support)</code>。<code v-pre>nvm install 18.20.4</code>，下载的时候如果报错可以将代理设为全局试试。</li>
<li><code v-pre>nvm use 18.20.4</code></li>
<li>包管理器可选npm、yarn、pnpm，官网举例用的是pnpm，这里便用它。npm install -g pnpm</li>
</ol>
<h1 id="_2-创建项目" tabindex="-1"><a class="header-anchor" href="#_2-创建项目"><span>2.创建项目</span></a></h1>
<p>通过脚手架创建项目（也可以一步步创建，<a href="https://vuepress.github.io/zh/guide/getting-started.html#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE" target="_blank" rel="noopener noreferrer">参考官网</a>）：</p>
<p><code v-pre>pnpm create vuepress project-name</code></p>
<p>这里会有一些选项，其中vite跟webpack之间我选了vite</p>
<h1 id="_3-运行项目" tabindex="-1"><a class="header-anchor" href="#_3-运行项目"><span>3.运行项目</span></a></h1>
<p><code v-pre>pnpm docs:dev</code></p>
<p>如果有警告说版本依赖不对，比如<code v-pre>vuepress</code> 是2.0.0-rc.14的，那么他需要的 <code v-pre>@vuepress/bundler-vite</code> 也是这一版本号，但是我通过脚手架安装的是2.0.0-rc.7的，那么就安装一遍那个高版本的 <code v-pre>@vuepress/bundler-vite</code> （一定要注意当前shell脚本所在目录，我第一次就搞错目录了，又删了重新执行的）</p>
<h1 id="_4-修改配置" tabindex="-1"><a class="header-anchor" href="#_4-修改配置"><span>4.修改配置</span></a></h1>
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
<span class="line"></span>
<span class="line">  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'/img/favicon.png'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/img/logo.gif'</span><span class="token punctuation">,</span></span>
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
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


