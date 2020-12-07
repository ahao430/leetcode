/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  let i = 0
  while (s.length && i > -1 && i < s.length - 1) {
    if (s[i] !== s[i + 1] && s[i].toLowerCase() === s[i + 1].toLowerCase()) {
      s = s.slice(0, i) + s.slice(i + 2)
      if (i > 0) {
        i--
      }
    } else {
      i++
    }
  }
  return s
};
// @lc code=end

