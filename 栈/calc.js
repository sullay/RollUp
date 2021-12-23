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

change('a+b*c+(d*e+f)*g')