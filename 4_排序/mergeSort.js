// 归并排序

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let middle = ~~(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  merge(mergeSort(left), mergeSort(right))
}
mergeSort([1, 2, 3, 4, 5, 6, 7])