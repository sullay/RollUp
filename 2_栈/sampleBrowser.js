const { Stack } = require('./linkedStack');

class Browser {
  constructor() {
    this.history = new Stack();
    this.backHistory = new Stack();
  }
  push(name) {
    this.backHistory.clear()
    this.history.push(name)
  }
  go() {
    if (this.backHistory.length <= 0) {
      return -1
    }
    this.history.push(this.backHistory.pop())
  }
  back() {
    if (this.history.length <= 0) {
      return -1
    }
    this.backHistory.push(this.history.pop())
  }
  display() {
    this.history.display()
  }
}
let brower = new Browser()
brower.push(1)
brower.push(2)
brower.push(3)
brower.display()
console.log('---------------------')
brower.back()
brower.back()
brower.display()
console.log('---------------------')
brower.go()
brower.display()
console.log('---------------------')
brower.push(4)
brower.go()
brower.display()