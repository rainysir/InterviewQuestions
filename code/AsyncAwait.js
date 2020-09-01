/**
 * @description async/await 是 generator 函数的语法糖,将*替换成async,yield替换成await
 * async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。
 * 
1）async函数内置执行器，函数调用之后，会自动执行，输出最后结果。而Generator需要调用next或者配合co模块使用。

2）更好的语义，async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

3）更广的适用性。co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async 函数的 await 命令后面，可以是 Promise 对象和原始类型的值。

4）返回值是Promise，async函数的返回值是 Promise 对象，Generator的返回值是 Iterator，Promise 对象使用起来更加方便。
 */

function* test() {
  yield new Promise((resolve, reject) => {
      setTimeout(resolve, 100);
  });
  yield new Promise((resolve, reject) => {
      // throw Error(1);
      resolve(10)
  });
  yield 10;
  return 1000;
}


function myCo(it) {
  return new Promise((res, rej) => {
    function next(data) {
      const { value, done } = it.next(data)
      if (done) {
        res(value)
      } else {
        Promise.resolve(value).then(val => next(val), rej)
      }
    }
    next()
  })
}

// const a = test()
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())

myCo(test()).then(res => {
  console.log(res)
})