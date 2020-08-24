// 快速排序
// 不稳定排序
// 时间复杂度 O(nlog2n) ~ O(nlogn)
// 空间复杂度 O(1)
const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let left = []
  let right = []
  let midIndex = Math.floor(arr.length / 2)
  const mid = arr[midIndex]

  for (let i = 0; i < arr.length; i++) {
    if (i === midIndex) continue
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}

console.log(quickSort(arr))