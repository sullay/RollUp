// 选择排序
// 不稳定原地排序
// 时间复杂度：最好O(n^2)、最坏O(n^2)、平均O(n^2)
// 0~i-1为已排序区域  遍历i~n找出最小的放到i位置
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  console.log(arr)
  return arr
}

selectionSort([3, 4, 6, 23, 6, 7, 2])