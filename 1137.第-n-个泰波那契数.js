/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let cache = [0, 1, 1]
  return calc(n)

  function calc (n) {
    if (cache[n] != null) return cache[n]
    let res = calc(n - 3) + calc(n - 2) + calc(n - 1)
    cache[n] = res
    return res
  }
};
// @lc code=end

