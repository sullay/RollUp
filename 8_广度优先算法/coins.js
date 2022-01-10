// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。
// 广度优先算法求解
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  // 记录已访问数值
  let visited = { 0: true };
  // 记录已访问但相连节点未访问
  let queue = [0];
  // 记录当前所有到达的节点被哪个节点访问
  let prev = {};
  // 当队列为空时，无法到达终点
  while (queue.length > 0) {
    let temp = queue.shift();
    // 超过最大值时不执行
    if (temp < amount) {
      // 遍历所有可能到到达的节点
      for (let i = 0; i < coins.length; i++) {
        // 如果已经访问过跳过
        if (!visited[temp + coins[i]]) {
          // 记录是从哪个节点到达的这个位置
          prev[temp + coins[i]] = temp;
          // 如果为重点返回
          if ((temp + coins[i]) === amount) {
            return getCount();
          }
          // 否则，此节点记录为已访问，并且入队
          visited[temp + coins[i]] = true;
          queue.push(temp + coins[i]);
        }
      }
    }
  }
  return -1;
  // 从重点开始向上查找初始位置，并记录边长
  function getCount() {
    let count = 0;
    let temp = amount;
    while (temp) {
      temp = prev[temp];
      count++;
    }
    return count;
  }
};

console.log(coinChange([342, 268, 284, 65, 217, 461, 245, 249, 106]
  , 9278))