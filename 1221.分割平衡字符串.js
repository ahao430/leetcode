/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  const stack = []
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i])
    } else {
      let last = stack[stack.length - 1]
      if (s[i] === last) {
        stack.push(s[i])
      } else {
        stack.pop()
        if (stack.length === 0) {
          res++
        }
      }
    }
  }
  return res
};
// @lc code=end

