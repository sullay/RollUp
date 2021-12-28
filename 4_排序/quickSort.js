// 快速排序
// 时间复杂度最好、平均为O(nlogn)，最坏时间复杂度O(n^2)
// 此实现方式空间复杂度为O(1)
// 非稳定原地排序
// 每次以最后一个元素为中间元素，大于和小于中间元素的元素分成两份，返回中间元素的位置再次执行左右两边排序
// left~i-1为小于中间元素的位置，循环一遍数组，小于中间元素就放到小于中间元素队列的最后面，最后把中间元素放在i的位置
function partition(arr, left, right) {
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] < arr[right]) {
      [arr[j], arr[i]] = [arr[i], arr[j]]
      i++
    }
  }
  [arr[right], arr[i]] = [arr[i], arr[right]]
  return i
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1 > left ? partitionIndex - 1 : left)
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
  return arr;
}

let a = [43434, 2, 213, 31, 1, 23, 12, 3, 2]

console.log(quickSort(a))