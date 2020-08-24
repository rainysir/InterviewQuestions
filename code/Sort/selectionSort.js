// 选择排序
// 非稳定排序
// 时间复杂度 O(n^2)
// 空间复杂度 O(1)
const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  console.time('选择排序耗时');
  for (var i = 0; i < len - 1; i++) {
      minIndex = i;
      for (var j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {     //寻找最小的数
              minIndex = j;                 //将最小数的索引保存
          }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}

console.log(selectionSort(arr))
