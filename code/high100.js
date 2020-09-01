console.log([1,2,3,4].reduce((...args) => {
  debugger
  console.log(args)
  return a + b
}, 1))
/** 8
 * 打印结果
 */
// function side(arr) {
//   arr[0] = arr[2];
// }
// function a(a, b, c = 3) {
//   debugger
//   c = 10;
//   console.log(arguments);
//   side(arguments);  // 这里 a，c的值不管怎么改变都是不会改变的
//   return a + b + c;
// }
// a(1, 1, 1)
/**
 * 7
 * @description 非固定参数 柯里化
 */
// function add(...args) {
//   return args.reduce((a, b) => a + b)
// }
// function curry(fn) {
//   let args = []
//   return function judge(...innerArgs) {
//     if (innerArgs.length) {
//       args = [
//         ...args,
//         ...innerArgs,
//       ]
//       return judge
//     } else {
//       const val = fn.apply(this, args)
//       args = []
//       return val
//     }
//   }
// }
// const curryAdd = curry(add)
// console.log(curryAdd(1,2,3,4)())
/**
 * 6
 * @description add(1,2,3) 函数柯里化 实现 add(1)(2)(3) add(1, 2)(3)
 * @param {Function} fn
 */
// function add(a, b, c) {
//   return a + b + c
// }
// function curry(fn) {
//   return function inner(...args) {
//     return args.length === fn.length ? fn(...args) : (...innerArgs) => inner(...args, ...innerArgs)
//   }
// }
// const curryAdd = curry(add)
/** 5
 * @description 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90
 * @param {Array} arr
 * @return {number}
 */
/** 4
 * @description 字符串出现的不重复最长长度
 * @param {string} s
 * @return {number}
 */
// function lengthOfLongestStr(str) {
//   let max = 0
//   let time = 0
//   let map = {}
//   const len = str.length
//   for (let i = 0; i < len; i++) {
//     if (map[str[i]]) {
//       if (time > max) {
//         max = time
//       }
//       map = {}
//       time = 0
//     }
//     ++time
//     map[str[i]] = 1
//   }
  
//   return max > time ? max : time
// }
// console.log(lengthOfLongestStr('abcdegfaabced'))
/** 3
 * @description 求斐波那契数列第n项
 * @param {number} n 项目数
 * @return {number} 返回第n项值
 */
// function fibonacci(n) {
//   if (n === 0 || n === 1) {
//     return n
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// function fibonacci(n, map = {}) {
//   if (n == 1 || n == 2) return 1;
//   if (map[n]) return map[n];
//   let data = fibonacci(n - 1, map) + fibonacci(n - 2, map)
//   map[n] = data
//   return data
// }

// console.log(fibonacci(4))
// 2 合并二维有序数组成一维有序数组，归并排序的思路


// 1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
// function mySetInterVal(fn, a, b) {
//   this.time = 0
//   this.timer = -1
//   this.start = () => {
//     this.timer = setTimeout(() => {
//       fn()
//       this.time++
//       this.start()
//     }, a + this.time * b)
//   }
//   this.stop = () => {
//     clearTimeout(this.timer)
//   }
// }

// const a = new mySetInterVal(() => {
//   console.log(1)
// }, 1000, 500)
// a.start()



