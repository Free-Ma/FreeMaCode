import{_ as s,c as a,o as n,a as p}from"./app.08516853.js";const C=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u751F\u6210package.json","slug":"\u751F\u6210package-json"},{"level":2,"title":"\u4F7F\u7528webpack","slug":"\u4F7F\u7528webpack"},{"level":3,"title":"\u89E3\u51B3\u65B9\u5F0F","slug":"\u89E3\u51B3\u65B9\u5F0F"},{"level":2,"title":"\u6307\u5B9A\u5165\u53E3","slug":"\u6307\u5B9A\u5165\u53E3"}],"relativePath":"webpack/base-use.md"}'),l={name:"webpack/base-use.md"},e=p(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install webpack webpack-cli -g </span><span style="color:#676E95;font-style:italic;"># \u5168\u5C40\u5B89\u88C5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install webpack webpack-cli -D </span><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u5230\u5F00\u53D1\u4F9D\u8D56</span></span>
<span class="line"></span></code></pre></div><h2 id="\u751F\u6210package-json" tabindex="-1">\u751F\u6210package.json <a class="header-anchor" href="#\u751F\u6210package-json" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init </span><span style="color:#676E95;font-style:italic;"># \u5728\u547D\u4EE4\u884C\u914D\u7F6E\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">npm init -y </span><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528webpack" tabindex="-1">\u4F7F\u7528webpack <a class="header-anchor" href="#\u4F7F\u7528webpack" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">webpack </span><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528\u5168\u5C40webpack</span></span>
<span class="line"><span style="color:#A6ACCD;">./node_modules/.bin/webpack </span><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528\u5C40\u90E8webpack</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u822C\u4F1A\u7528\u5C40\u90E8<code>webpack</code>, \u90A3\u4E48\u8FD9\u6837\u5C31\u4F1A\u5F88\u9EBB\u70E6</p><h3 id="\u89E3\u51B3\u65B9\u5F0F" tabindex="-1">\u89E3\u51B3\u65B9\u5F0F <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u5F0F" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx webpack</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u5F88\u5947\u602A\uFF0C\u4E00\u822C\u4E0D\u7528</p><ul><li>\u5728<code>package.json</code>\u4E2D\u6709\u4E2A <code>scripts</code> \u811A\u672C\uFF0C\u5728\u91CC\u9762\u53EF\u4EE5\u914D\u7F6E\u547D\u4EE4</li></ul><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6307\u5B9A\u5165\u53E3" tabindex="-1">\u6307\u5B9A\u5165\u53E3 <a class="header-anchor" href="#\u6307\u5B9A\u5165\u53E3" aria-hidden="true">#</a></h2><p>\u5728\u8FDB\u884C\u6253\u5305\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u4F1A\u627E\u5230 <code>src</code> \u76EE\u5F55\u4E0B\u7684 <code>index.js</code> \u6587\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\u5C31\u4F1A\u62A5\u9519;\u5982\u679C\u9700\u8981\u6307\u5B9A\u5176\u4ED6\u6587\u4EF6\u4F5C\u4E3A\u5165\u53E3\u6587\u4EF6\uFF08\u4EE5 <code>main.js</code> \u4E3A\u4F8B\uFF09\u53EF\u4EE5\u6572\u5165\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx webpack --entry ./src/main.js </span><span style="color:#676E95;font-style:italic;"># entry \u6307\u5B9A\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">npx webpack --entry ./src/main.js --output-path ./build </span><span style="color:#676E95;font-style:italic;"># output-path \u6307\u5B9A\u51FA\u53E3</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5728\u771F\u5B9E\u9879\u76EE\u4E2D\uFF0C\u4E0D\u4F1A\u76F4\u63A5\u7528\u4EE5\u4E0A\u547D\u4EE4\u6765\u6307\u5B9A\u51FA\u5165\u53E3\uFF0C\u800C\u662F\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6: <code>webpack.config.js</code>,\u8FD9\u4E2A\u6587\u4EF6\u7684\u540D\u5B57\u4E00\u822C\u662F\u56FA\u5B9A\u7684\uFF0C\u5982\u679C\u60F3\u8981\u5176\u4ED6\u540D\u5B57\u4F8B\u5982:<code>what.config.js</code>\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5728package.json\u4E2D\u4FEE\u6539\u811A\u672C\uFF1A</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack --config what.config.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u8FD9\u91CC\u53EA\u80FD\u7528ES5\u8BED\u6CD5\uFF0C\u5982\u679C\u8981\u7528ES6\u8FD8\u9700\u8981\u989D\u5916\u7684\u914D\u7F6E</strong></p><ul><li><code>output</code> \u7684 <code>path</code> \u63A5\u6536\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4F8B\u5982: <code>C:/User/name/Desktop/project_name/build</code>\uFF0C\u4F46\u662F\u5199\u7EDD\u5BF9\u8DEF\u5F84\u5F88\u9EBB\u70E6\uFF0C\u6240\u4EE5\u91C7\u7528\u62FC\u63A5\u7684\u65B9\u5F0F\u6765\u8BBE\u7F6E\u8DEF\u5F84\uFF0C\u8FD9\u91CC\u5F15\u7528 <code>node</code> \u4E2D <code>path</code> \u7684 <code>resolve</code> \u65B9\u6CD5; <code>filename</code> \u6307\u5B9A\u6253\u5305\u540E\u7684\u6587\u4EF6\u540D</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./build</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bundle.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,20),o=[e];function c(t,r,i,D,y,d){return n(),a("div",null,o)}var A=s(l,[["render",c]]);export{C as __pageData,A as default};
