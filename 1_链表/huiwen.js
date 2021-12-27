// 判断单向链表是否为回文


// 单向链表 （此代码未考虑循环链表情况）
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
  // 从数组初始化链表
  static initFromArray(array) {
    let linkedList = new this()
    if (!Array.isArray(array)) {
      return linkedList
    }
    array.forEach(a => linkedList.push(a))
    return linkedList
  }
  // 从某个节点开始copy链表
  static initFromNode(node) {
    let currentNode = node
    let resList = new LinkedList()
    let resCurrentNode = resList.head
    while (currentNode !== null) {
      resCurrentNode.next = new Node(currentNode.element)
      currentNode = currentNode.next
      resCurrentNode = resCurrentNode.next
    }
    return resList
  }
  // 链表末尾追加元素
  push(element) {
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = new Node(element)
  }
  // 展示链表所有元素
  display() {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
  // 寻找中间节点
  findMiddleNode() {
    let slow = this.head
    let fast = this.head
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    if (fast !== null) {
      slow = slow.next
    }
    console.log('middleNode:', slow)
    return slow
  }
  // 是否为回文
  isHuiWen() {
    let root = new Node('head')
    // 后半段链表的首个节点（后续由于遍历）
    let currentNode = LinkedList.initFromNode(this.findMiddleNode()).head.next
    while (currentNode !== null) {
      // 保存currentNode的后续节点
      let next = currentNode.next
      // currentNode插入到root首个位置
      currentNode.next = root.next
      root.next = currentNode
      // currentNode赋值为后续节点
      currentNode = next
    }
    // 遍历判断每个节点是否一致，全部一致为回文
    let rootCurrentNode = root.next
    currentNode = this.head.next
    while (rootCurrentNode !== null) {
      if (rootCurrentNode.element !== currentNode.element) {
        return false
      }
      rootCurrentNode = rootCurrentNode.next
      currentNode = currentNode.next
    }
    return true
  }
}

// let link = LinkedList.initFromArray([1,2,3,4,5])
// link.push(6)
// link.push(7)
// link.display()

let link = LinkedList.initFromArray(['a', 'b', 'c', 'd', 'e', 'd', 'c', 'b', 'a'])
// link.display()
// link.findMiddleNode()
// LinkedList.initFromNode(link.findMiddleNode()).display()
console.log(link.isHuiWen())