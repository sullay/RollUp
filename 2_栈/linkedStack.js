class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.length = 0
  }

  push(element) {
    let node = new Node(element)
    if (this.top) {
      node.next = this.top
      this.top = node
    } else {
      this.top = node
    }
    this.length++
  }

  pop() {
    if (this.length <= 0) {
      return null
    }
    let temp = this.top.element
    this.top = this.top.next
    this.length--
    return temp
  }

  clear() {
    this.top = null
    this.length = 0
  }

  display() {
    let temp = this.top
    while (temp) {
      console.log(temp.element)
      temp = temp.next
    }
  }
  getTop() {
    if (this.length <= 0) {
      return null
    }
    return this.top.element
  }
}

// let stack = new Stack();

// stack.push('a')
// stack.push('b')
// stack.push('c')

// stack.display()
// console.log(stack.length)
// console.log(stack.pop(), stack.length)
// console.log(stack.pop(), stack.length)
// console.log(stack.pop(), stack.length)
// console.log(stack.pop(), stack.length)
// stack.display()

exports.Stack = Stack