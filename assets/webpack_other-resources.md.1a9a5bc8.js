import{_ as s,c as a,o as l,a as n}from"./app.08516853.js";const C=JSON.parse('{"title":"webpack5 \u4E4B\u524D","description":"","frontmatter":{},"headers":[{"level":2,"title":"webpack5 \u4E4B\u524D","slug":"webpack5-\u4E4B\u524D"},{"level":3,"title":"file-loader","slug":"file-loader"},{"level":3,"title":"url-loader","slug":"url-loader"},{"level":2,"title":"webpack5","slug":"webpack5"}],"relativePath":"webpack/other-resources.md"}'),e={name:"webpack/other-resources.md"},o=n(`<h2 id="webpack5-\u4E4B\u524D" tabindex="-1">webpack5 \u4E4B\u524D <a class="header-anchor" href="#webpack5-\u4E4B\u524D" aria-hidden="true">#</a></h2><h3 id="file-loader" tabindex="-1">file-loader <a class="header-anchor" href="#file-loader" aria-hidden="true">#</a></h3><p>\u8981\u5904\u7406jpg\u3001png \u7B49\u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u9700\u8981\u6709\u5BF9\u5E94\u7684 <code>loader</code>: <code>file-loader</code></p><ul><li><code>file-loader</code> \u7684\u4F5C\u7528\u5C31\u662F\u5E2E\u52A9\u6211\u4EEC\u5904\u7406 <code>import/require()</code> \u65B9\u5F0F\u5F15\u5165\u7684\u4E00\u4E2A\u6587\u4EF6\u8D44\u6E90\uFF0C\u5E76\u4E14\u4F1A\u5C06\u5B83\u653E\u5230\u6211\u4EEC\u8F93\u51FA\u7684\u6587\u4EF6\u5939\u4E2D</li><li>\u53EF\u4EE5\u4FEE\u6539\u5B83\u7684\u540D\u5B57\u548C\u6240\u5728\u7684\u6587\u4EF6\u5939</li></ul><p><strong>\u5B89\u88C5 file-loader</strong></p><p><code>npm i file-loader -D</code></p><p><strong>\u914D\u7F6E\u5904\u7406\u56FE\u7247\u7684 Rule</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">png</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">jpe</span><span style="color:#89DDFF;">?</span><span style="color:#C3E88D;">g</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">git</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">svg</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">i</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">use</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file-loader</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u679C\u662F\u7ED9 <code>src</code> \u8D4B\u503C\uFF0C\u90A3\u4E48\u56FE\u7247\u5FC5\u987B\u8981\u5BFC\u5165\u8FDB\u6765\uFF0C\u8FD9\u6837 <code>webpack</code> \u624D\u4F1A\u628A\u5B83\u5F53\u6210\u4E00\u4E2A\u6A21\u5757</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> aImg </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../img/1.jpg</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgEl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">imgEl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> aImg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(imgEl)</span></span>
<span class="line"></span></code></pre></div><h4 id="\u6587\u4EF6\u547D\u540D\u89C4\u5219" tabindex="-1">\u6587\u4EF6\u547D\u540D\u89C4\u5219 <a class="header-anchor" href="#\u6587\u4EF6\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a></h4><p>\u5904\u7406\u540E\u7684\u6587\u4EF6\u540D\u79F0\u6309\u7167\u4E00\u5B9A\u7684\u89C4\u5219\u8FDB\u884C\u663E\u793A</p><ul><li>\u6BD4\u5982\u4FDD\u7559\u539F\u6765\u7684\u6587\u4EF6\u540D\u3001\u6269\u5C55\u540D\uFF0C\u540C\u65F6\u4E3A\u4E86\u9632\u6B62\u91CD\u590D\uFF0C\u5305\u542B\u4E00\u4E2A <code>hash</code> \u503C\u7B49</li></ul><p>\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528 <code>PlaceHolders</code> \u6765\u5B8C\u6210\uFF0C<code>webpack</code> \u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u5927\u91CF\u7684 <code>PlaceHolders</code> \u6765\u663E\u793A\u4E0D\u540C\u7684\u5185\u5BB9</p><ul><li>\u53EF\u4EE5\u5728\u6587\u6863\u4E2D\u67E5\u9605\u81EA\u5DF1\u9700\u8981\u7684 <a href="https://webpack.js.org/loaders/file-loader/#placeholders" target="_blank" rel="noopener noreferrer">placeholder</a></li></ul><p>\u51E0\u4E2A\u6700\u5E38\u7528\u7684 placeholder:</p><ul><li><code>[ext]</code>: \u5904\u7406\u6587\u4EF6\u7684\u6269\u5C55\u540D</li><li><code>[name]</code>: \u5904\u7406\u6587\u4EF6\u7684\u540D\u79F0</li><li><code>[hash]</code>: \u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528MD4\u7684\u6563\u5217\u51FD\u6570\u5904\u7406\uFF0C\u751F\u6210\u7684\u4E00\u4E2A128\u4F4D\u7684hash\u503C\uFF0832\u4E2A\u5341\u516D\u8FDB\u5236\uFF09</li><li><code>[contentHash]</code>: \u5728 <code>file-loader</code> \u4E2D\u548C[hash]\u7ED3\u679C\u662F\u4E00\u81F4\u7684\uFF08\u5728 <code>webpack</code> \u7684\u4E00\u4E9B\u5176\u4ED6\u5730\u65B9\u4E0D\u4E00\u6837\uFF09</li><li><code>[hash:&lt;length&gt;]</code>: \u622A\u56FEhash\u7684\u957F\u5EA6\uFF0C\u9ED8\u8BA432\u4E2A\u5B57\u7B26\u592A\u957F\u4E86</li><li><code>[path]</code>: \u6587\u4EF6\u76F8\u5BF9\u4E8E <code>webpack</code> \u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84</li></ul><h3 id="url-loader" tabindex="-1">url-loader <a class="header-anchor" href="#url-loader" aria-hidden="true">#</a></h3><p>url-loader \u548C file-loader \u7684\u5DE5\u4F5C\u65B9\u5F0F\u662F\u76F8\u4F3C\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u5C06\u8F83\u5C0F\u7684\u6587\u4EF6\uFF0C\u8F6C\u6210 <code>base64</code> \u7684 URI</p><h2 id="webpack5" tabindex="-1">webpack5 <a class="header-anchor" href="#webpack5" aria-hidden="true">#</a></h2><p>\u8D44\u6E90\u6A21\u5757\u7C7B\u578B(asset module type)\uFF0C\u901A\u8FC7\u6DFB\u52A0 4 \u79CD\u65B0\u7684\u6A21\u5757\u7C7B\u578B\uFF0C\u6765\u66FF\u6362\u6240\u6709\u8FD9\u4E9B loader\uFF1A</p><ul><li><code>asset/resource</code> \u53D1\u9001\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u5E76\u5BFC\u51FA URL\u3002\u4E4B\u524D\u901A\u8FC7\u4F7F\u7528 file-loader \u5B9E\u73B0\u3002</li><li><code>asset/inline</code> \u5BFC\u51FA\u4E00\u4E2A\u8D44\u6E90\u7684 data URI\u3002\u4E4B\u524D\u901A\u8FC7\u4F7F\u7528 url-loader \u5B9E\u73B0\u3002</li><li><code>asset/source</code> \u5BFC\u51FA\u8D44\u6E90\u7684\u6E90\u4EE3\u7801\u3002\u4E4B\u524D\u901A\u8FC7\u4F7F\u7528 raw-loader \u5B9E\u73B0\u3002</li><li><code>asset</code> \u5728\u5BFC\u51FA\u4E00\u4E2A data URI \u548C\u53D1\u9001\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u4E4B\u95F4\u81EA\u52A8\u9009\u62E9\u3002\u4E4B\u524D\u901A\u8FC7\u4F7F\u7528 url-loader\uFF0C\u5E76\u4E14\u914D\u7F6E\u8D44\u6E90\u4F53\u79EF\u9650\u5236\u5B9E\u73B0\u3002</li></ul><p>\u5F53\u5728 webpack 5 \u4E2D\u4F7F\u7528\u65E7\u7684 assets loader\uFF08\u5982 file-loader/url-loader/raw-loader \u7B49\uFF09\u548C asset \u6A21\u5757\u65F6\uFF0C\u4F60\u53EF\u80FD\u60F3\u505C\u6B62\u5F53\u524D asset \u6A21\u5757\u7684\u5904\u7406\uFF0C\u5E76\u518D\u6B21\u542F\u52A8\u5904\u7406\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4 asset \u91CD\u590D\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5C06 asset \u6A21\u5757\u7684\u7C7B\u578B\u8BBE\u7F6E\u4E3A &#39;javascript/auto&#39; \u6765\u89E3\u51B3\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">jpe</span><span style="color:#89DDFF;">?</span><span style="color:#C3E88D;">g</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">png</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">gif</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">svg</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">asset</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">parser</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">dataUrlCondition</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">maxSize</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 4kb</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">generator</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">img/[name]_[hash:6][ext]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,24),p=[o];function c(r,t,F,D,y,d){return l(),a("div",null,p)}var h=s(e,[["render",c]]);export{C as __pageData,h as default};
