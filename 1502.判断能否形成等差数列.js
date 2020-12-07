/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  if (arr.length === 2) return true

  arr.sort((a, b) => a - b)
  const delta = arr[0] - arr[1]
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== delta) return false
  }
  return true
};
// @lc code=end

