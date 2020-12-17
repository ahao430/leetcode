/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      for (let j = 0; j < letters.length; j++) {
        if (letters[j] !== s[i - 1] && letters[j] !== s[i + 1]) {
          s = s.slice(0, i) + letters[j] + s.slice(i + 1)
          break
        }
      }
    }
  }
  return s
};
// @lc code=end

