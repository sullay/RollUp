// 链表常用操作
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }
  // 末尾插入
  push(element) {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = new Node(element)
  }
  // 查找某个节点
  findByValue(element) {
    let currentNode = this.head.next
    while (currentNode) {
      if (currentNode.element === element) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }
  // 根据下表查找
  findByIndex(index) {
    if (index < 0) {
      return null
    }
    let currentIndex = 0
    let currentNode = this.head.next
    while (currentIndex < index && currentNode) {
      currentIndex++
      currentNode = currentNode.next
    }
    return currentNode
  }
  // 字符串展示
  toString() {
    let res = "linkedList: "
    let currentNode = this.head.next
    while (currentNode) {
      res += `${currentNode.element} `
      currentNode = currentNode.next
    }
    return res
  }
  // 单链表反转
  reverse() {
    let root = new Node('head')
    let currentNode = this.head.next
    while (currentNode) {
      let next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    this.head = root
  }
  // 环检测
  checkCircle() {
    let fast = this.head.next
    let slow = this.head.next
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      if (fast === slow) {
        return true
      }
    }
    return false
  }
  // 求环入口
  getCircleImport() {
    let isCricle = false
    let fast = this.head.next
    let slow = this.head.next
    while (fast && fast.next && !isCricle) {
      fast = fast.next.next
      slow = slow.next
      if (fast === slow) {
        isCricle = true
      }
    }
    if (isCricle) {
      fast = this.head.next
      while (fast !== slow) {
        fast = fast.next
        slow = slow.next
      }
      return fast
    }
    return isCricle
  }
  // 有序链表合并
  static mergeList(list1, list2) {
    if (!list1 || !list2 || list1.constructor !== LinkedList || list2.constructor !== LinkedList) {
      return -1
    }
    let root = new LinkedList()
    let currentNode = root.head
    let currentNode_1 = list1.head.next
    let currentNode_2 = list2.head.next
    while (currentNode_1 || currentNode_2) {
      if (!currentNode_1 || (currentNode_2.element < currentNode_1.element)) {
        currentNode.next = currentNode_2
        currentNode_2 = currentNode_2.next
      } else if (!currentNode_2 || (currentNode_1.element <= currentNode_2.element)) {
        currentNode.next = currentNode_1
        currentNode_1 = currentNode_1.next
      }
      currentNode = currentNode.next
    }
    return root
  }
  // 删除链表倒数第n个节点
  removeByIndex(n) {
    if (this.checkCircle()) {
      return this
    }
    let index = -1
    let currentNode = this.head.next
    while (currentNode) {
      index++
      currentNode = currentNode.next
    }
    if (n > index) {
      return this
    }
    currentNode = this.head
    for (let i = 0; i < index - n; i++) {
      currentNode = currentNode.next
    }
    currentNode.next = currentNode.next.next
    return this
  }
}

// let list = new LinkedList()
// list.push(10)
// list.push(9)
// list.push(8)
// list.push(7)
// console.log(list.toString())
// console.log(list.findByValue(9))
// console.log(list.findByIndex(1))
// list.reverse()
// console.log(list.toString())

// list.head.next.next.next.next.next = list.head.next
// console.log(list.checkCircle(), list.getCircleImport())

let list1 = new LinkedList()
list1.push(1)
list1.push(4)
list1.push(8)
list1.push(20)

let list2 = new LinkedList()
list2.push(4)
list2.push(6)
list2.push(11)
list2.push(50)

// console.log(LinkedList.mergeList(list1, list2).toString())

console.log(list1.removeByIndex(4).toString())