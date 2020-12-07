/*
 * @lc app=leetcode.cn id=1528 lang=javascript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i]
  }
  return arr.join('')
};
// @lc code=end

