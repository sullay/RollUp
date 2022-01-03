// 二分查找
function binaryFind(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = ~~((low + high) / 2);
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
        let mid = ~~((low + high) / 2);
        console.log(arr[low], arr[high], arr[mid])
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

console.log(binaryFind([1, 2, 3, 4, 5, 6, 7, 8, 20, 30], 1));

console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6], 1))