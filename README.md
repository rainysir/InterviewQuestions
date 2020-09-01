# InterviewQuestions
前端面试题Demo汇总

## HTML
1. 浏览器渲染原理
   1. 首先解析收到的文档，根据文档定义构建一颗 DOM 树，DOM 树是由 DOM 元素及属性节点组成的；
   2. 然后对 CSS 进行解析，生成 CSSOM 规则树；
   3. 根据 DOM 树和 CSSOM 规则树构建 Render Tree。渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 对象相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。
   4. 当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情就是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。
   5. 布局阶段结束后是绘制阶段，比那里渲染树并调用对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。
   6. 为了更好的用户体验，渲染引擎会尽可能早的将内容呈现到屏幕上，并不会等到所有的 html 解析完成之后再去构建和布局 render tree。它是解析完一部分内容就显示一部分内容，同时可能还在网络下载其余内容。

## CSS
1. 标准盒模型和怪异盒模型
   w3c标准盒模型: box-sizing: content-box盒子高度仅由content 宽高决定，不包含padding/border/margin
   IE盒魔性: box-sizing: border-box盒子高度包含 padding/border (常用)
2. 

## JS
1. [从浏览器地址栏输入 url 到显示页面的步骤](./md/从浏览器地址栏输入%20url%20到显示页面的步骤.md)
2. [Promise 相关](./code/Promise.js)
3. [发布订阅 Event Emitter](./code/EventEmitter.js)
4. [JS实现继承](./md/JS实现继承.md)
5. [String 相关](./code/String)
   1. [给定一个模板和一个对象，利用对象中的数据渲染模板，并返回最终结果。](./code/String/renderTemplate.js)
6. [项目优化方案](./md/项目优化.md)
7. [排序相关](./code/Sort)![](./img/sort.png)
   1. [冒泡排序](./code/Sort/bubbleSort.js)
   2. [选择排序](./code/Sort/selectionSort.js)
   3. [插入排序](./code/Sort/insertionSort.js)
   4. [快速排序](./code/Sort/quickSort.js)
8. 隐式类型转换 == 的5条规则[例题](./md/==.md)
   1. NaN和其他任何类型比较永远返回false（包括和他自己）
   2. Boolean 和其他任何类型比较，Boolean 首先被转换为 Number 类型。
   3. String和Number比较，先将String转换为Number类型。
   4. null == undefined比较结果是true，除此之外，null、undefined和其他任何结果的比较值都为false。
   5. 原始类型和引用类型做比较时，引用类型会依照ToPrimitive规则转换为原始类型。
9. [webpack优化](./md/webpack做过哪些优化.md)
10. [Event Loop Node和浏览器差异](./md/EventLoop.md)
12. React
    1.  [Fiber](./md/Fiber.md)
13. Vue
    1.  vue name 作用
        1.  keep-alive 使用 name 做缓存过滤
        2.  递归组件用 name 调用自身
        3.  vue-devtools 展示名字
    2.  [Vue 为什么要用 vm.$set() 解决对象新增属性不能响应的问题 ？你能说说如下代码的实现原理么？](./md/Vue.$set.md)