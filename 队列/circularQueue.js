class CircularQueue {
  constructor(n) {
    this.queue = new Array(n)
    this.n = n
    this.head = 0
    this.tail = 0
  }
  enqueue(element) {
    if ((this.tail === this.head - 1) || (this.tail === this.head + this.n - 1)) {
      return false
    }
    this.queue[this.tail] = element
    this.tail++
    if (this.tail >= this.n) {
      this.tail = 0
    }
    console.log(this.head, this.tail, this.queue)
    return true
  }
  dequeue() {
    if (this.head === this.tail) {
      return null
    }
    let res = this.queue[this.head]
    this.queue[this.head] = null
    this.head++
    if (this.head >= this.n) {
      this.head = 0
    }
    console.log(this.head, this.tail, this.queue)
    return res
  }
}

let queue = new CircularQueue(5)
queue.enqueue(10)
queue.enqueue(2)
queue.enqueue(8)
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.enqueue(10)
queue.enqueue(2)
queue.enqueue(8)
queue.enqueue(10)
queue.enqueue(2)
queue.enqueue(8)