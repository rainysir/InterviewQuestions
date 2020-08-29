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



