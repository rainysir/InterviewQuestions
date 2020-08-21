const promise1 = new Promise((res, rej) => {
  setTimeout(() => res(1), 1000)
})
const promise2 = new Promise((res, rej) => {
  setTimeout(() => res(2), 1500)
})
const promise3 = new Promise((res, rej) => {
  setTimeout(() => rej(new Error('six')), 500)
})

// PromiseAll
function promiseAll(promises) {
  const promiseLen = promises.length
  const result = new Array(promiseLen)
  let resolveNum = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseLen; i++) {
      promises[i].then(res => {
        result[i] = res
        resolveNum++
        if (resolveNum === promiseLen) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

// promiseAll([promise1, promise2, promise3]).then(res => {
//   debugger
// }).catch(err => {
//   debugger
// })