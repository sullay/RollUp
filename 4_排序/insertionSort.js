// 插入排序
// 稳定原地排序
// 时间复杂度：最好O(n)、最坏O(n^2)、平均O(n^2)
// 0~i-1为已排序区域  遍历i~n-1,插入到排序区域合适位置

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
  console.log(arr)
  return arr
}

insertionSort([2,4,1,56,7,2,9])