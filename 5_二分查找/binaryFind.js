function binaryFind(arr, value) {
    let low = 0;
    let high = arr.length;
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

console.log(binaryFind([1, 2, 3, 4, 5, 6, 7, 8,20,30], 20));