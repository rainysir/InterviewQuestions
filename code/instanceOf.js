function instanceOf(a, b) {
  while (a.__proto__) {
    if (a.__proto__ === b.prototype) {
      return true
    }
    a.__proto__ = a.__proto__.__proto__
  }
  if (a.__proto__ === null) {
    return false
  }
}

function A() {}
const a = new A()

console.log(a instanceof A)
console.log(instanceOf(a, A))