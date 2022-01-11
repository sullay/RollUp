// 在一个 106 x 106 的网格中，每个网格上方格的坐标为 (x, y) 。

// 现在从源方格 source = [sx, sy] 开始出发，意图赶往目标方格 target = [tx, ty] 。数组 blocked 是封锁的方格列表，其中每个 blocked[i] = [xi, yi] 表示坐标为 (xi, yi) 的方格是禁止通行的。

// 每次移动，都可以走到网格中在四个方向上相邻的方格，只要该方格 不 在给出的封锁列表 blocked 上。同时，不允许走出网格。

// 只有在可以通过一系列的移动从源方格 source 到达目标方格 target 时才返回 true。否则，返回 false。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/escape-a-large-maze
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 计算被包围的最大数量，广度遍历超过最大数量，与小于最大数量的点不能相连
 var isEscapePossible = function (blocked, source, target) {
  if (blocked.length < 2) {
      return true;
  }
  // 最大数量+blocked.length，方便计算，将不可访问点算为已访问
  let maxNum = blocked.length * (blocked.length - 1) / 2 + blocked.length;
  return bfs(target) === bfs(source);
  function bfs(source) {
      // 记录已访问
      let visited = new Set(blocked.map(b => `${b[0]}-${b[1]}`));
      // 广度遍历队列
      let queue = [source];
      while (queue.length) {
          if (visited.size > maxNum) return true;
          let [x, y] = queue.shift();
          if (!visited.has(`${x}-${y}`)) {
              visited.add(`${x}-${y}`);
              queue.push([Math.min(x + 1, Math.pow(10, 6) - 1), y]);
              queue.push([x, Math.min(y + 1, Math.pow(10, 6) - 1)]);
              queue.push([Math.max(x - 1, 0), y]);
              queue.push([x, Math.max(y - 1, 0)]);
          }
      }
      return false;
  }
};
