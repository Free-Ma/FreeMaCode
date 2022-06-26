import{_ as s,c as n,o as a,a as l}from"./app.08516853.js";const F=JSON.parse('{"title":"plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"plugin","slug":"plugin"},{"level":3,"title":"CleanWebpackPlugin","slug":"cleanwebpackplugin"},{"level":3,"title":"HtmlWebpackPlugin","slug":"htmlwebpackplugin"},{"level":3,"title":"CopyWebpackPlugin","slug":"copywebpackplugin"},{"level":2,"title":"\u8C03\u8BD5\u4EE3\u7801","slug":"\u8C03\u8BD5\u4EE3\u7801"}],"relativePath":"webpack/plugins.md"}'),p={name:"webpack/plugins.md"},o=l(`<h2 id="plugin" tabindex="-1">plugin <a class="header-anchor" href="#plugin" aria-hidden="true">#</a></h2><p><code>loader</code> \u662F\u7528\u4E8E\u7279\u5B9A\u7684\u6A21\u5757\u7C7B\u578B\u8FDB\u884C\u8F6C\u6362</p><p><code>plugin</code> \u53EF\u4EE5\u7528\u4E8E\u6267\u884C\u66F4\u52A0\u5E7F\u6CDB\u7684\u4EFB\u52A1\uFF0C\u6BD4\u5982\u6253\u5305\u4F18\u5316\u3001\u8D44\u6E90\u7BA1\u7406\u3001\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u7B49</p><h3 id="cleanwebpackplugin" tabindex="-1">CleanWebpackPlugin <a class="header-anchor" href="#cleanwebpackplugin" aria-hidden="true">#</a></h3><p>\u6BCF\u6B21\u4FEE\u6539\u4E00\u4E9B\u914D\u7F6E\uFF0C\u91CD\u65B0\u6253\u5305\u65F6\uFF0C\u90FD\u9700\u8981\u624B\u52A8\u5220\u9664\u6253\u5305(dist)\u6587\u4EF6\u5939</p><ul><li>\u53EF\u4EE5\u501F\u52A9\u4E8E\u4E00\u4E2A\u63D2\u4EF6\u6765\u5E2E\u52A9\u6211\u4EEC\u5B8C\u6210\uFF0C\u8FD9\u4E2A\u63D2\u4EF6\u5C31\u662F <code>CleanWebpackPlugin</code></li></ul><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i clean-webpack-plugin -D</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u5B8C\u4E4B\u540E\u5728 <code>webpack.config.js</code> \u91CC\u9762\u914D\u7F6E:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> CleanWebpackPlugin </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">clean-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CleanWebpackPlugin</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="htmlwebpackplugin" tabindex="-1">HtmlWebpackPlugin <a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a></h3><ul><li>\u6211\u4EEC\u7684HTML\u6587\u4EF6\u662F\u7F16\u5199\u5728\u6839\u76EE\u5F55\u4E0B\u7684\uFF0C\u800C\u6700\u7EC8\u6253\u5305\u7684\u6587\u4EF6\u5939\u4E2D\u662F\u6CA1\u6709 <code>index.html</code> \u6587\u4EF6\u7684</li><li>\u5728\u8FDB\u884C\u9879\u76EE\u90E8\u7F72\u65F6\uFF0C\u5FC5\u7136\u4E5F\u662F\u9700\u8981\u6709\u5BF9\u5E94\u7684\u5165\u53E3\u6587\u4EF6 <code>index.html</code></li><li>\u6240\u4EE5\u4E5F\u9700\u8981\u5BF9 <code>index.html</code> \u8FDB\u884C\u6253\u5305\u5904\u7406</li></ul><p>\u5B89\u88C5\u63D2\u4EF6:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i html-webpack-plugin -D</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E\u548C <code>CleanWebpackPlugin</code> \u4E00\u6837</p><h4 id="\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u6309\u7167\u6307\u5B9A\u7684-index-html-\u6A21\u677F\u8FDB\u884C\u6253\u5305" tabindex="-1">\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u6309\u7167\u6307\u5B9A\u7684 <code>index.html</code> \u6A21\u677F\u8FDB\u884C\u6253\u5305 <a class="header-anchor" href="#\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u6309\u7167\u6307\u5B9A\u7684-index-html-\u6A21\u677F\u8FDB\u884C\u6253\u5305" aria-hidden="true">#</a></h4><ul><li>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>public</code> \u6587\u4EF6\u5939\uFF0C\u521B\u5EFA <code>index.html</code></li><li>\u5728 <code>webpack.config.js</code> \u4E2D\u914D\u7F6E</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HtmlWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> DefinePlugin </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./public/index.html</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DefinePlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">BASE_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;./&#39;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<code>public/index.html</code> \u4F7F\u7528\u4E86 <code>ejs</code> \u6A21\u677F\uFF0C\u4E3B\u8981\u4E3A\u4E86\u8BC6\u522B\u5176\u4E2D\u7684 <code>BASE_URL</code>, \u6240\u4EE5\u9700\u8981\u914D\u7F6E <code>DefinePlugin</code>, <code>DefinePlugin</code> \u662F <code>webpack</code> \u5185\u7F6E\u7684\u5DE5\u5177</strong></p><h3 id="copywebpackplugin" tabindex="-1">CopyWebpackPlugin <a class="header-anchor" href="#copywebpackplugin" aria-hidden="true">#</a></h3><p>public \u6587\u4EF6\u5939\u4E2D\u6709\u4E9B\u6587\u4EF6\u6253\u5305\u65F6\u9700\u8981\u76F4\u63A5\u590D\u5236\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u7528\u5230\u8FD9\u4E2A\u63D2\u4EF6\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i copy-webpack-plugin -D</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CopyWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">copy-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CopyWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">patterns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#676E95;font-style:italic;">// \u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u76EE\u6807\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6253\u5305\u76EE\u5F55\uFF0C\u4EE5 output.path \u4F5C\u4E3A\u5F53\u524D\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">globOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">ignore</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">**/index.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5FFD\u7565 public \u6587\u4EF6\u5939\u4E0B\u6240\u6709\u540D\u4E3A index.html\u7684\u6587\u4EF6\uFF0C\u56E0\u4E3A\u53EF\u80FD\u6709\u591A\u4E2A\u5C42\u7EA7\u7684index.html, \u6240\u4EE5\u8981\u5339\u914D\u6240\u6709\uFF0C** \u4EE3\u8868\u5339\u914D\u6240\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8C03\u8BD5\u4EE3\u7801" tabindex="-1">\u8C03\u8BD5\u4EE3\u7801 <a class="header-anchor" href="#\u8C03\u8BD5\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u7ECF\u5E38\u4F1A\u770B\u5230\u62A5\u9519\u4FE1\u606F\uFF0C\u4F46\u662F\u6253\u5305\u4E4B\u540E\uFF0C\u4EC5\u4EC5\u663E\u793A\u6253\u5305\u7684js\u6587\u4EF6\u4E2D\u7684\u9519\u8BEF\uFF0C\u57FA\u672C\u4E0A\u65E0\u6CD5\u9605\u8BFB</p><p>\u6240\u4EE5\u9700\u8981\u914D\u7F6E\u6A21\u5F0F\u548C\u6620\u5C04\u6587\u4EF6\uFF0C\u914D\u7F6E\u597D\u4E4B\u540E\uFF0C\u62A5\u9519\u4FE1\u606F\u4F1A\u663E\u793A\u51FA\u5177\u4F53\u7684\u6587\u4EF6\u4E2D\u7684\u5177\u4F53\u4F4D\u7F6E\u7684\u62A5\u9519</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">devtool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source-map</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,27),e=[o];function c(t,r,D,y,i,C){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{F as __pageData,d as default};
