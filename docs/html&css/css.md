
## BFC 是什么？
盒模型。
把文档看成一个个盒子。
### BFC 的概念
所谓BFC，就是 block formatting context，块级格式化上下文。

它会创建一个特殊的区域，在这个区域中，只有 block box 参与布局。
### BFC 的成因
- 根元素或者其他包含它的元素
- 浮动元素
- 绝对定位元素
- 内联块
- 表格单元格
- 表格标题
- 具有 overflow ，且不是 visible 的元素
- display: inline-block/table-cell/table-caption/flex/inline-flex/grid/inline-grid
### BFC 的特点/规则
- 内部的 box 将会独占宽度，且在垂直方向，轮流排列
- box 垂直方向的间距由 margin 决定，但是同一个 BFC 的两个相邻 box 的 margin ,会出现边距折叠现象
- 每个 box 水平方向上左边缘，与 BFC 的左边缘对齐，即使存在浮动，也是如此
- BFC 区域不会与浮动元素重叠，而是依次排列。
- BFC 区域内是一个独立的渲染容器，容器内的元素和 BFC 区域外的元素不会形成干扰
- 浮动元素的高度也参与到 BFC 高度计算中
## 背景、阴影、滤镜
### background 非常常用的一个属性。
- X-color: 背景颜色
- X-image: 背景图片
- X-repeat 图像的平铺方式
- X-attachment scroll / fixed
- X-position
- X-size
- X-origin
- X-clip
- X-blend-mode

background 的 连续规则：
- background: color image repeat attachment position/size

### 阴影

box-shadow
- offsetX 水平偏移
- offsetY 垂直偏移
- blur    模糊半径
- spread  扩展距离
- color   投影颜色
- position投影位置

text-shadow drop-shadow
- offsetX 水平偏移
- offsetY 垂直偏移
- blur    模糊半径
- color   投影颜色
### 滤镜
filter 一共有十个函数
- blur 模糊
- brightness 两端
- contrast 对比度
- drop-shadow 阴影
- grayscale 灰度
- hue-rotate 色相旋转
- invert 反相
- opaticy 透明度
- saturate 饱和度
- sepia 褐色
定位
- fixed 相对于浏览器窗口定位
- absolute 相对于第一个父级不为static的元素定位
- relative  不改变文档流，直接基于原有位置定位
- sticky  CSS3， fixed 和 relative 切换
- static -- normal
## 选择器
基础选择器

标签选择器

ID 选择器

类选择器

### CSS 的优先级是什么？
!important > 内联样式(style="") > ID 选择器 > 类选择器 = 属性选择器 = 伪类 > 标签选择器 = 伪元素选择器。
### 层级选择器
- foo bar 后代选择器，元素的后代元素
- foo > bar 子代选择器，元素的子代元素
- foo + bar 相邻同胞选择器
- foo ~ bar 通用同胞选择器
- foo, bar 并集选择器
- foo.class 交集选择器

### 条件选择器
- :lang 具体语言标记的元素
- :dir() 指定编写方向的元素
- :has 包括指定元素的元素
- :is 指定条件的元素
- :not 非指定条件的元素
- :where 指定条件的元素
- 状态选择器
- :active
- :hover
- :link
- :visited
- :focus
### 表单
- :valid
- :invalid
- :checked   switch
### 结构选择器
- :root 文档的根元素
- :empty 无子元素的元素
- :nth-child(n)  元素中指定顺序索引的元素。odd/even
- :nth-last-child(n) 倒序索引
- :first-child 元素中为首的元素
- :last-child 元素中为尾的元素
- :only-child 仅有该元素的元素
### 属性选择器
- [attr] 指定属性的元素
- [attr=val] 属性等于指定值的元素
- [attr*=val] 包括指定元素的元素
- [attr^=val] 包括开头
- [attr$=val] 包括结尾
### 伪元素
- ::before 在元素前加入
- ::after 在元素后面加入
- ::first-letter
- ::first-line
- ::backdrop 全屏模式的元素 （Document.fullscreen）
- ::placeholder

```html
<div class="t1">
    <span>hello</span>luyi<span>teather</span>
</div>
<div class="t2">luyi</div>
<style>
    .t2::before {
        content:'hello'
    }
    .t2::after {
        content:'teacher'
    }
</style>
```

## flex 布局
flex -- flexible box 弹性布局。

display: flex
### 容器属性
- flex-direction 主轴的方向 
  - row -- default
  - column
- flex-wrap 如果一个轴线排不下，如何换行 
  - nowrap -- default
  - wrap
  - wrap-reverse
- flex-flow 是以上两者的简写
- justify-content 
  - flex-start
  - flex-end
  - center
  - space-between
  - space-around
  - space-evenly
- align-items 
  - flex-start
  - flex-end
  - center
  - baseline 项目的第一行文字的基线对齐
  - stretch 占满高度
### 项目属性
-  order 
  - 属性定义项目的排列顺序，数值越小，排列越靠前，默认为0.
-  flex-grow 
  - 放大比例，剩余空间。默认为0；
-  flex-shrink 
  - 缩小比例，剩余空间，默认为1；
-  flex-basis 
  - 定义在分配多余空间之前，项目占据的空间。
-  flex 
  - flex: 1 是什么意思 
    - 如果直接赋值数字，flex:1 -- flex: 1 1 0%
    - 如果给 auto, flex: auto -- flex: 1 1 auto
    - flex:none flex: 0 0 none
## 动画和变换
tranform, transition, animation
transfrom
### 变换，2d 变换、3d 变化
- transfrom 
  - flat
  - preserve-3d
- translate 平移
- translate(x, y)
- translate3d(x, y, z) -- translateZ(0)
- scale 缩放
- scale(x,y)
- scale3d(x, y, z)
- skew 扭曲
- rotate 旋转
- rotate()
- rotate(x, y, z, a)
- transition
- transition-property
  - all
  - none
  - string
- transition-duration
### 持续时间
- transition-timimg-function
- transition-delay
- animation
- name 有一个动画的名称
- duration 持续时间
- timimg-function
- delay 播放次数
