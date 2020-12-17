/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let max= 0
  let arr = []
  for (let i=0; i<s.length; i++) {
    if (s[i] === '(') {
      arr.push('(')
      if (arr.length > max) max = arr.length
    } else if (s[i] === ')') {
      arr.pop()
    }
  }
  return max
};
// @lc code=end

