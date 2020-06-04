/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 递增顺序查找树
 */

var RecentCounter = function () {
  this.data = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  let len = this.data.length;
  let count = null;
  for (let i = len - 1; i > -1; i--) {
    if (this.data[i] > t) {
      continue;
    } else if (this.data[i] >= t - 3000) {
      count = count == null ? 1 : count + 1;
    } else {
      break;
    }
  }
  this.data.push(t);
  return count + 1;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
