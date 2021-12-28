// 归并排序
// 时间复杂度全部为O(nlogn)
// 稳定非原地排序
// 空间复杂度为O(n),执行完的函数内存会被释放
// 每次将数组分为左右，直到分到最小返回，合并操作为两个有序数组合并
function merge(left, right) {
  let arr = []
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      arr.push(left[l])
      l++
    } else {
      arr.push(right[r])
      r++
    }
  }
  return arr.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let middle = ~~(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([4, 3, 12, 6, 1, 3, 5, 3, 43, 4]))