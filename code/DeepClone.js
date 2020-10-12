function getType(obj) {
  const type = Object.prototype.toString.call(obj)

  return type.slice(8, -1)
}

// DFS
function DFSdeepClone(obj, visitedArr = []) {
  const type = getType(obj)
  let _obj = {}

  if (type === 'Object' || type === 'Array') {
    _obj = type === 'Object' ? {} : []
    const index = visitedArr.indexOf(obj)
    if (index !== -1) {
      _obj = visitedArr[index]
    } else {
      visitedArr.push(obj)
      for (let item in obj) {
        _obj[item] = DFSdeepClone(obj[item], visitedArr)
      }
    }

  } else if (type === 'Function') {
    _obj = eval(`(${obj.toString()})`)
  } else {
    _obj = obj
  }

  return _obj
}

let str = 'String'
var strCopy = DFSdeepClone(str)
console.log(strCopy) // String String 测试通过
// 输入 数字 -1980
// 预期输出数字 -1980
let num = -1980
var numCopy = DFSdeepClone(num)
console.log(numCopy) // -1980 -1980 测试通过
// 输入bool类型
// 预期输出bool类型
let bool = false
var boolCopy = DFSdeepClone(bool)
console.log(boolCopy) //false false 测试通过

let circleObj = {
  foo: {
    name: function() {
      console.log(1)
    },
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        aChild: null //待会让它指向obj.foo
      }
    }
  }
}
circleObj.foo.bar.baz.aChild = circleObj.foo
var circleObjCopy = DFSdeepClone(circleObj)

console.log(circleObjCopy)


