/*
 * @lc app=leetcode.cn id=1317 lang=javascript
 *
 * [1317] 将整数转换为两个无零整数的和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  const half = Math.floor(n / 2)
  for (let i = 1; i <= half; i++) {
    if (valid(i) && valid(n - i)) return [i, n - i]
  }
  return false

  function valid (num) {
    if (num === 0) return false
    while (num) {
      if (num % 10 === 0) return false
      num = Math.floor(num / 10)
    }
    return true
  }
};
// @lc code=end

