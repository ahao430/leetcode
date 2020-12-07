/*
 * @lc app=leetcode.cn id=1237 lang=javascript
 *
 * [1237] 找出给定方程的正整数解
 */

// @lc code=start
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  const res = []
  let x = 1
  let y = 1
  // 函数
  const fnMap = {
    1: (x, y) => x + y,
    2: (x, y) => x * y
  }
  const fn = customfunction.f
  // 找到x=1时，范围内最大点
  while (fn(x, y) < z) {
    y++
  }
  if (x > 0 && y > 0 && fn(x, y) === z) {
    res.push([x, y])
  }
  while (y > 0) {
    // 向右移动
    x++
    // 向下查找
    while (x > 0 && y > 0) {
      if (fn(x, y) > z) {
        y--
      } else {
        if (x > 0 && y > 0 && fn(x, y) === z) {
          res.push([x, y])
        }
        break
      }
    }
  }
  return res
};
// @lc code=end

