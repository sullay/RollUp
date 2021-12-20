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
}

let list = new LinkedList()
list.push(10)
list.push(9)
list.push(8)
console.log(list.toString())
console.log(list.findByValue(22))
console.log(list.findByIndex(-2))