// 插入排序
// 稳定排序
// 时间复杂度 O(n^2) ~ O(n)
// 空间复杂度 O(1)
const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

function insertionSort(arr) {
  console.time('插入排序')
  const len = arr.length
  let preIndex, current

  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]

    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }

    arr[preIndex + 1] = current
  }

  console.timeEnd('插入排序')
  return arr
}

console.log(insertionSort(arr))