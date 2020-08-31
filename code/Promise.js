const PORMISE_STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}
function MyPromise(executor) {
  const _this = this
  _this.status = PORMISE_STATUS.PENDING
  _this.value = undefined
  _this.reason = undefined
  _this.callbacks = []

  function resolve(value) {
    if (_this.status === PORMISE_STATUS.PENDING) {
      _this.status = PORMISE_STATUS.FULFILLED
      _this.value = value
      if (_this.callbacks.length > 0) {
        setTimeout(() => {
          _this.callbacks.forEach(({ onFulFilled }) => {
            onFulFilled(_this.value)
          })
        })
      }
    }
  }

  function reject(reason) {
    if (_this.status === PORMISE_STATUS.PENDING) {
      _this.status = PORMISE_STATUS.REJECTED
      _this.reason = reason
      if (_this.callbacks.length > 0) {
        setTimeout(() => {
          _this.callbacks.forEach(({ onFulFilled }) => {
            onRejected(_this.reason)
          })
        })
      }
    }
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}


MyPromise.prototype.then = function(onFulFilled, onRejected) {
  const _this = this
  return new MyPromise((res, rej) => {
    if (_this.status === PORMISE_STATUS.PENDING) {
      _this.callbacks.push({
        onFulFilled,
        onRejected,
      })
    } else if (_this.status === PORMISE_STATUS.FULFILLED) {
      const value = onFulFilled(_this.value)
      if (value instanceof MyPromise) {
        value.then(
          value => res(value),
          reason => rej(reason)
        )
      } else {
        res(value)
      }
    } else if (_this.status === PORMISE_STATUS.REJECTED) {
      onRejected(_this.reason)
    }
  })
}

const a = new MyPromise((res, rej) => {
  setTimeout(() => {
    res(123)
  }, 1000)
})

a.then(res => {
  console.log(res)
})

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => res(1), 1000)
// })
// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => res(2), 1500)
// })
// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => rej(new Error('six')), 500)
// })

// // PromiseAll
// function promiseAll(promises) {
//   const promiseLen = promises.length
//   const result = new Array(promiseLen)
//   let resolveNum = 0
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promiseLen; i++) {
//       promises[i].then(res => {
//         result[i] = res
//         resolveNum++
//         if (resolveNum === promiseLen) {
//           resolve(result)
//         }
//       }).catch(err => {
//         reject(err)
//       })
//     }
//   })
// }

// // promiseAll([promise1, promise2, promise3]).then(res => {
// //   debugger
// // }).catch(err => {
// //   debugger
// // })

// // Promise Race
// function promiseRace(promises) {
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promises.length; i++) {
//       promises[i].then(resolve, reject)
//     }
//   })
// }

// promiseRace([promise1, promise2, promise3]).then(res => {
//   debugger
// }).catch(err => {
//   debugger
// })