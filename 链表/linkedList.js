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
}

let list = new LinkedList()
list.push(10)
list.push(9)
list.push(8)
list.push(7)
// console.log(list.toString())
// console.log(list.findByValue(9))
// console.log(list.findByIndex(1))
// list.reverse()
// console.log(list.toString())
list.head.next.next.next.next.next = list.head.next
console.log(list.checkCircle(), list.getCircleImport())