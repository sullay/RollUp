const MAX_LEVEL = 16;
class Node {
    constructor(val) {
        this.val = val;
        this.next = new Array(MAX_LEVEL).fill(null);
    }
}
var Skiplist = function () {
    this.maxLevel = 0;
    this.head = new Node(-1);
};

Skiplist.prototype.getLevel = function () {
    let level = 1;
    for (let i = 1; i < MAX_LEVEL; i++) {
        if (Math.random() > 0.5) level++;
    }
    return level;
};
/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
    let pre = this.head;
    for (let i = this.maxLevel - 1; i >= 0; i--) {
        while (pre.next[i] && pre.next[i].val < target) {
            pre = pre.next[i];
        }
    }
    if(pre.next[0]&&pre.next[0].val===target) return true;
    return false;
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
    let level = this.getLevel();
    let node = new Node(num);
    let pre = this.head;
    for (let i = level - 1; i >= 0; i--) {
        while (pre.next[i] && pre.next[i].val < num) {
            pre = pre.next[i];
        }
        node.next[i] = pre.next[i];
        pre.next[i] = node;
    }
    if (level > this.maxLevel) this.maxLevel = level;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
    let pre = this.head;
    for (let i = this.maxLevel - 1; i >= 0; i--) {
        while (pre.next[i] && pre.next[i].val < num) {
            pre = pre.next[i];
        }
        if (i === 0 && (!pre.next[i] || pre.next[i].val !== num)) return false;
        if (pre.next[i] && pre.next[i].val === num) pre.next[i] = pre.next[i].next[i];
        if (!this.head.next[i]) this.maxLevel--;
    }
    return true;
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */