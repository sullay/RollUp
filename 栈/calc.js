const { Stack } = require('./linkedStack');


// 中缀表达式a + b*c + (d * e + f) * g，其转换成后缀表达式则为a b c * + d e * f  + g * +。
function change(string) {
  let map = {
    '+': 1,
    '-': 1,
    '*': 2,
    "/": 2
  }
  let symbolStack = new Stack();
  let res = ''
  for (let s of string) {
    if (s === '(') {
      symbolStack.push(s)
    } else if (s === ')') {
      let temp = symbolStack.pop()
      while (temp !== '(') {
        if (!temp) {
          return -1
        }
        res += temp;
        temp = symbolStack.pop()
      }
    } else if (map[s] > ~~map[symbolStack.getTop()]) {
      symbolStack.push(s)
    } else if (map[s] <= ~~map[symbolStack.getTop()]) {
      while (map[s] <= ~~map[symbolStack.getTop()]) {
        res += symbolStack.pop()
      }
      symbolStack.push(s)
    } else {
      res += s;
    }
  }
  while (symbolStack.length > 0) {
    res += symbolStack.pop()
  }
  console.log(res)
  return res
}

function calc(string) {
  let tempString = change(string)
  let numStack = new Stack()
  for (let s of tempString) {
    if (['+', '-', '*', '/'].includes(s)) {
      let num1 = numStack.pop()
      let num2 = numStack.pop()
      if (num1 === null || num2 === null) {
        return
      }
      switch (s) {
        case '+':
          numStack.push(num2 + num1)
          break;
        case '-':
          numStack.push(num2 - num1)
          break;
        case '*':
          numStack.push(num2 * num1)
          break;
        case '/':
          numStack.push(num2 / num1)
          break;
        default:
          break;
      }
    } else {
      numStack.push(~~s)
    }
  }
  return numStack.pop()
}

change('a+b*c+(d*e+f)*g')
console.log(calc('1+2*(3-5)+6*7'))

console.log(calc('(1+2)*5'))