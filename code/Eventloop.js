// macro-task: 整体代码、setTimeout、setInterval, setImmediate, I/O, UI rendering.
// micro-task: process.nextTick, Promise(原生)，Object.observe，MutationObserver

// micro-task 优先级高于 macro-task

process.nextTick(function () {
  console.log('nextTick延迟执行1');
});
process.nextTick(function () { 
  console.log('nextTick延迟执行2');
});
// 加入两个setImmediate()的回调函数
setTimeout(function () {
  console.log('setImmediate延迟执行1'); 
  // 进入下次循环 
  process.nextTick(function () {
      console.log('强势插入1');
  });
  Promise.resolve().then(() => {
    console.log('微任务1')
  })
}, 30);
// 加入两个setImmediate()的回调函数
setTimeout(function () {
  console.log('setImmediate延迟执行1'); 
  // 进入下次循环 
  process.nextTick(function () {
      console.log('强势插入2');
  });
  Promise.resolve().then(() => {
    console.log('微任务2')
  })
}, 30);
setImmediate(function () {
  console.log('setImmediate延迟执行2'); 
});

console.log('正常执行');
