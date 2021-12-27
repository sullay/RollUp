// 冒泡排序
// 稳定原地排序
// 时间复杂度：最好O(n)、最坏O(n^2)、平均O(n^2)
// 优化点如果一次遍历都不存在数据交换说明已经排序完成，优化后最好为O(n)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isChange = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        isChange = true
      }
    }
    if (!isChange) break
  }
  console.log(arr)
  return arr
}

bubbleSort([3, 2, 1])