/*
 * @lc app=leetcode.cn id=1656 lang=javascript
 *
 * [1656] 设计有序流
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.stream = new Array(n)
  this.ptr = 0
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
  this.stream[id - 1] = value
  if (this.stream[this.ptr] == null) return []
  let cur = this.ptr
  while (true) {
    if (this.stream[cur] != null) {
      cur++
    } else {
      break
    }
  }
  let lastPtr = this.ptr
  this.ptr = cur
  return this.stream.slice(lastPtr, cur)
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
// @lc code=end

