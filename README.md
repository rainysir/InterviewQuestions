# InterviewQuestions
前端面试题Demo汇总

## CSS
1. 标准盒模型和怪异盒模型
   w3c标准盒模型: box-sizing: content-box盒子高度仅由content 宽高决定，不包含padding/border/margin
   IE盒魔性: box-sizing: border-box盒子高度包含 padding/border (常用)
2. 

## JS
1. [从浏览器地址栏输入 url 到显示页面的步骤](./md/从浏览器地址栏输入%20url%20到显示页面的步骤.md)
2. [Promise 相关](./code/Promise.js)
3. [Event Emitter](./code/EventEmitter.js)
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