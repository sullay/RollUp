// items 重量
// values 价值
// w 最大重量

// 状态转移表
function knapsack(items, values, w) {
    let states = [];
    for (let i = 0; i < items.length; i++) {
        states[i] = [0, ...Array(w).fill(-1)];
    }
    states[0][0] = 0;
    if (items[0] <= w) {
        states[0][items[0]] = values[0];
    }
    for (let i = 1; i < items.length; i++) {
        for (let j = 1; j <= w; j++) {
            if (states[i - 1][j] >= 0) {
                states[i][j] = states[i - 1][j];
            }
            if ((states[i - 1][j - items[i]] >= 0) && (states[i - 1][j - items[i]] + values[i] > states[i][j])) {
                states[i][j] = states[i - 1][j - items[i]] + values[i];
            }
        }
    }
    let res = -1;
    for (let j = w; j > -1; j--) {
        res = Math.max(states[items.length - 1][j], res)
    }
    console.log(res);
    return res;
}

// 状态转移方程法(递归法无法确认最终状态所以存在问题，改用状态转移方程递推法与上面代码相同)
function knapsack2(items, values, w) {
    return f(items.length - 1, w);
    function f(i, cw) {
        if (i < 0 || cw < 0) {
            return -1;
        }
        if (cw === 0) {
            return 0;
        } else if (i === 0 && cw === items[0]) {
            return values[0];
        }
        let res = -1;
        let from1 = f(i - 1, cw);
        let from2 = f(i - 1, cw - items[i])
        if (from1 >= 0) {
            res = from1;
        }
        if ((from2 >= 0) && (from2 + values[i] > res)) {
            res = from2 + values[i];
        }
        return res;
    }
}
knapsack([2, 2], [3, 4], 2);
knapsack([2, 2, 4, 6, 3], [3, 4, 8, 9, 6], 10);
console.log(knapsack2([2, 2], [3, 4], 2));
console.log(knapsack2([2, 2, 4, 6, 3], [3, 4, 8, 9, 6], 10));