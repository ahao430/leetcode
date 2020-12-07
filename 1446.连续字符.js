/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let max = 1
  let i = 0
  while (i < s.length) {
    let j = i + 1
    while (s[j] === s[i]) {
      j++
    }
    let len = j - i
    if (len > max) max = len
    i = j
  }
  return max
};
// @lc code=end

