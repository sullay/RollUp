// 二分查找
function binaryFind(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // let mid = ~~((low + high) / 2);
    let mid = low + ((high - low) >> 1);
    if (value === arr[mid]) {
      return mid;
    } else if (value > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// 循环顺序数组二分查找
function search(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // let mid = ~~((low + high) / 2);
    let mid = low + ((high - low) >> 1);
    if (value === arr[mid]) {
      return mid;
    } else if (arr[low] <= arr[high]) {
      if (value > arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] > arr[high]) {
      if (value > arr[high] && value < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (value < arr[low] && value > arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

// 二分查找查询第一个匹配元素
function binaryFindFirst(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // let mid = ~~((low + high) / 2);
    let mid = low + ((high - low) >> 1);
    if (arr[mid] > value) {
      high = mid - 1;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] < value) {
        return mid;
      }
      high = mid - 1;
    }
  }
  return -1;
}

// 二分查找查询最后一个匹配元素
function binaryFindLast(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // let mid = ~~((low + high) / 2);
    let mid = low + ((high - low) >> 1);
    if (arr[mid] > value) {
      high = mid - 1;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] > value) {
        return mid;
      }
      low = mid + 1;
    }
  }
  return -1;
}

// 二分查找第一个大于等于给定值的元素
function searchFirstMore(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] < value) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] < value) return mid;
      high = mid - 1;
    }
  }
  return -1;
}

// 二分查找最后一个小于等于给定值的元素
function searchLastLess(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] > value) {
      high = mid - 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] > value) return mid;
      low = mid + 1;
    }
  }
  return -1;
}
console.log(binaryFind([1, 2, 3, 4, 5, 6, 7, 8, 20, 30], 1));

console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6], 1))

console.log(binaryFindFirst([1, 1, 1, 2, 2, 3, 4, 5, 6, 7], 2))

console.log(binaryFindLast([1, 1, 1, 2, 2, 3, 4, 5, 6, 7], 1))

console.log(searchFirstMore([1, 2, 3, 4, 6, 7], 5))

console.log(searchLastLess([1, 2, 3, 4, 6, 7], 5))