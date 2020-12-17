/*
 * @lc app=leetcode.cn id=1566 lang=javascript
 *
 * [1566] 重复至少 K 次且长度为 M 的模式
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
  const len = arr.length;
  const size = m * k

  for (let i = 0; i < len - size + 1; i++) {
    if (check(i)) return true
  }
  return false

  function check (i) {
    for (let j = i; j < i + m; j++) {
      for (let l = 1; l < k; l++) {
        if (arr[j + l * m] !== arr[j]) return false
      }
    }
    return true
  }
};
// @lc code=end

