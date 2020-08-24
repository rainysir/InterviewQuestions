// 冒泡排序
// 稳定排序
// 时间复杂度 O(n^2) ~ O(n)
// 空间复杂度 O(1)
const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

// 基础冒泡
function bubbleSort(arr) {
  console.time('冒泡')
  const num = arr.length - 1
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  console.timeEnd('冒泡')
  return arr
}

// **改进冒泡排序： **设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。
function bubbleSort1(arr) {
  console.time('优化冒泡')
  let num = arr.length - 1
  while (num > 0) {
    let pos = 0
    for (let j = 0; j < num; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        pos = j
      }
    }
    num = pos
  }
  console.timeEnd('优化冒泡')
  return arr
}

// **改进冒泡排序： 在每次排序中,正反冒泡找到最大值和最小值
function bubbleSort2(arr) {
  console.time('优化2冒泡')
  let low = 0
  let high = arr.length - 1
  let tmp, i
  while (low < high) {
    for (i = low; i < high; i++) {
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp
      }
    }
    high--
    for (i = high; i > low; i--) {
      if (arr[i] < arr[i - 1]) {
        tmp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = tmp
      }
    }
    low++
  }
  console.timeEnd('优化2冒泡')
  return arr
}




console.log(bubbleSort(arr))
console.log(bubbleSort1(arr))
console.log(bubbleSort2(arr))