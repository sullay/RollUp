// 深度优先解决水壶问题
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  // 模拟递归调用栈（防止调用栈溢出）
  let stack = [[0, 0]];
  // 已访问
  let visited = new Set();
  while (stack.length) {
    let [jug1, jug2] = stack.pop();
    if (jug1 === targetCapacity || jug2 === targetCapacity || jug1 + jug2 === targetCapacity) {
      return true;
    }
    if (!visited.has(`${jug1}-${jug2}`)) {
      visited.add(`${jug1}-${jug2}`);
      stack.push([0, jug2]);
      stack.push([jug1, 0]);
      stack.push([jug1Capacity, jug2]);
      stack.push([jug1, jug2Capacity]);
      stack.push([Math.max(0, jug1 - jug2Capacity + jug2), Math.min(jug2 + jug1, jug2Capacity)]);
      stack.push([Math.min(jug2 + jug1, jug1Capacity), Math.max(0, jug2 - jug1Capacity + jug1)]);
    }

  }
  return false;
};


console.log(canMeasureWater(3, 5, 4))