/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let count = 0
  let n = 1
  let i = 0
  while (count < k) {
    if (n < arr[i] || arr[i] == null) {
      count++
      n++
    } else if (n === arr[i]) {
      n++
      i++
    }
  }
  return n - 1
};
// @lc code=end

