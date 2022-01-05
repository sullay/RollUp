// 跳表
const MAX_LEVEL = 16; //最大层级

class Node {
  constructor(data = -1) {
    this.data = data; // 数据
    this.refer = new Array(MAX_LEVEL); // 存储节点对应层级的下一个元素  refer[n]为n层级下一个元素
  }
}

class SkipList {
  constructor() {
    this.maxLevel = 1; // 当前链表最大层级
    this.head = new Node(); // 头节点
  }
  // 随机生成层数
  static getLevel() {
    let level = 1;
    for (let i = 0; i < MAX_LEVEL - 1; i++) {
      if (Math.random() > 0.5) {
        level++;
      }
    }
    return level;
  }
  // 插入
  insert(value) {
    if (!value) return
    // 新元素
    let newNode = new Node(value);
    // 新元素层级
    let level = SkipList.getLevel();
    // 存储新元素各层级的上一个元素
    let tempArr = new Array(level);
    let p = this.head;
    // 遍历各层级最后一个小于value的元素并存储在tempArr
    for (let i = level - 1; i >= 0; i--) {
      while (p.refer[i] && p.refer[i].data < value) {
        p = p.refer[i];
      }
      tempArr[i] = p;
    }
    // 各层级插入新元素
    for (let j = 0; j < level; j++) {
      newNode.refer[j] = tempArr[j].refer[j];
      tempArr[j].refer[j] = newNode;
    }
    // 重新赋值最大层级
    if (level > this.maxLevel) {
      this.maxLevel = level;
    }
  }
  // 移除
  remove(value) {
    // 目标节点
    let res = null;
    if (!value) return res;
    // 存储各层级最后一个小于目标元素的元素
    let tempArr = new Array(this.maxLevel);
    let p = this.head;
    // 遍历各层级最后一个小于value的元素并存储在tempArr
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (p.refer[i] && p.refer[i].data < value) {
        p = p.refer[i];
      }
      tempArr[i] = p;
    }
    // 如果第0层没有此元素，返回null
    if (!tempArr[0].refer[0] || tempArr[0].refer[0].data !== value) return res;
    // tempArr[0]下一个元素为目标元素
    res = tempArr[0].refer[0];
    // 遍历各层级如果存在目标元素则删除
    for (let j = this.maxLevel - 1; j >= 0; j--) {
      if (tempArr[j].refer[j] && tempArr[j].refer[j].data === value) {
        tempArr[j].refer[j] = tempArr[j].refer[j].refer[j];
      }
      // 每次遍历以后如果当前层级为空则层级数-1
      if (!this.head.refer[j]) {
        this.maxLevel--;
      }
    }
    return res;
  }
  find(value) {
    if (!value) return null
    let p = this.head;
    // 遍历找到最低层级里面最后一个小于value的元素
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (p.refer[i] && p.refer[i].data < value) {
        p = p.refer[i];
      }
    }
    // 查看是否存在目标元素
    if (p.refer[0] && p.refer[0].data === value) {
      return p.refer[0]
    }
    return null;
  }
  // 层级打印
  printAll() {
    console.log('maxLevel', this.maxLevel)
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      let p = this.head;
      let str = '';
      while (p.refer[i]) {
        p = p.refer[i];
        str += p.data;
      }
      console.log(str)
    }
  }
}

let list = new SkipList()
list.insert(5)
list.insert(4)
list.insert(1)
list.insert(9)
list.insert(2)
list.insert(7)
list.printAll()
// console.log(list.find(2))
list.remove(11)
list.remove(1)
list.remove(2)
list.remove(7)
list.printAll()