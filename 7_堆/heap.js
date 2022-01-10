// 大顶堆（左右子节点都小于父节点的完全二叉树）
// 建堆时间复杂度 O(n)
// 插入、删除堆顶时间复杂度O(logn)
class Heap {
  constructor(arr) {
    // 0下表位置置空方便计算
    this.arr = [null].concat(arr);
    // 遍历所有非叶子节点依次堆化
    for (let i = ~~(this.arr.length / 2); i > 0; i--) {
      this.heapify(i);
    }
    this.printAll();
  }
  // 堆化
  heapify(index) {
    while (true) {
      // maxIndex 保存父节点与左右子节点的最大值下标
      let maxIndex = index;
      // 存在左子节点并且父节点小于左子节点
      if (index * 2 < this.arr.length && this.arr[index] < this.arr[index * 2]) {
        maxIndex = index * 2;
      }
      // 存在右子节点并且右子节点大于左子节点与父节点
      if (index * 2 + 1 < this.arr.length && this.arr[maxIndex] < this.arr[index * 2 + 1]) {
        maxIndex = index * 2 + 1;
      }
      // 如果父节点为最大堆化完成
      // 否则交换父节点与较大的子节点的并继续向下堆化
      if (maxIndex === index) return;
      [this.arr[index], this.arr[maxIndex]] = [this.arr[maxIndex], this.arr[index]]
      index = maxIndex;
    }
  }
  // 插入
  insert(value) {
    // 插入到末尾位置
    this.arr.push(value);
    // 保存当前位置下标
    let currentIndex = this.arr.length - 1;
    // 如果新插入节点大于父节点，则交换位置，并继续向上比较大小
    while (currentIndex > 1 && this.arr[currentIndex] > this.arr[~~(currentIndex / 2)]) {
      [this.arr[~~(currentIndex / 2)], this.arr[currentIndex]] = [this.arr[currentIndex], this.arr[~~(currentIndex / 2)]];
      currentIndex = ~~(currentIndex / 2);
    }
    this.printAll();
  }
  removeMax() {
    let res = null;
    // 只存在null时为空
    if (this.arr.length <= 1) return res;
    // 交换收尾位置
    [this.arr[1], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[1]];
    // 最大值弹出
    res = this.arr.pop();
    //堆顶堆化
    this.heapify(1);
    this.printAll();
    return res;
  }
  printAll() {
    if (this.arr.length <= 1) return;
    let str = '';
    // 每层的第一个下标
    let minIndex = 1;
    for (let i = 1; i < this.arr.length; i++) {
      // 遍历到下一层时重置minIndex与str
      if (i === minIndex * 2) {
        console.log(str);
        minIndex *= 2;
        str = ''
      }
      str += this.arr[i];
    }
    console.log(str);
    console.log('-----------------')
  }
}

let heap = new Heap([1, 2, 3, 4, 5, 6, 7])

heap.insert(9)
heap.insert(8)

console.log(heap.removeMax())