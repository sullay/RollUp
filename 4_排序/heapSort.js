// 堆排序（大顶堆）
class Heap {
  constructor(arr) {
    this.arr = arr || [];
    // 0下表位置置为null，方便公式计算
    this.arr.unshift(null);
    this.build();
  }
  // 建堆
  build() {
    // 从下向上堆化每一个拥有叶子节点的节点
    for (let index = ~~(this.arr.length / 2); index > 0; index--) {
      this.heapify(index);
    }
    this.printAll()
  }
  // 堆化
  heapify(index, len = this.arr.length) {
    while (true) {
      // 堆化节点与左右子节点大小找出最大
      let maxIndex = index;
      if (index * 2 < len && this.arr[index * 2] > this.arr[index]) {
        maxIndex = index * 2;
      }
      if (index * 2 + 1 < len && this.arr[index * 2 + 1] > this.arr[maxIndex]) {
        maxIndex = index * 2 + 1;
      }
      // 如果最大的为堆化节点完成
      if (maxIndex === index) return;
      // 堆化节点与左右子节点较大的交换位置，并继续堆化
      [this.arr[index], this.arr[maxIndex]] = [this.arr[maxIndex], this.arr[index]];
      index = maxIndex;
    }
  }
  //层次打印
  printAll() {
    // 每次层的第一个节点下表
    let topIndex = 1;
    let str = '';
    for (let i = 1; i < this.arr.length; i++) {
      if (i < topIndex * 2) {
        str += this.arr[i]
      }
      if (i === 2 * topIndex - 1) {
        console.log(str)
        topIndex *= 2
        str = ''
      }
    }
    console.log(str);
    console.log('---------------------')
  }
  // 插入
  insert(value) {
    // 新元素插入到最后一个位置
    let index = this.arr.length;
    this.arr.push(value);
    // 比较当前元素与父元素大小，如果大于父元素则交换位置
    while (index > 1 && this.arr[~~(index / 2)] < this.arr[index]) {
      [this.arr[~~(index / 2)], this.arr[index]] = [this.arr[index], this.arr[~~(index / 2)]];
      index = ~~(index / 2);
    }
    this.printAll()
  }
  // 移除堆顶
  removeMax() {
    if (this.arr.length <= 1) {
      return;
    }
    [this.arr[1], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[1]];
    this.arr.pop();
    this.heapify(1);
    this.printAll();
  }
  // 堆排序
  static sort(arr) {
    // 建堆
    let heap = new Heap(arr);
    // 标记堆长
    let len = heap.arr.length;
    // 当堆内至少有两个元素的时候循环
    while (len > 2) {
      // 交换堆顶与最后一个元素，并且堆长度减1，并重新堆化堆顶
      [heap.arr[1], heap.arr[len - 1]] = [heap.arr[len - 1], heap.arr[1]];
      len--;
      heap.heapify(1, len);
    }
    // 删除首个null元素
    return heap.arr.slice(1);
  }
}

// let heap = new Heap([1, 2, 3, 4, 5, 6, 7, 8]);
// let heap = new Heap();
// heap.printAll()
// heap.insert(9)
// heap.removeMax()
// heap.removeMax()
console.log(Heap.sort([2, 1, 5, 7, 9, 2, 3]))