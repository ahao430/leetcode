/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let res = ''
  let item = []
  let stack = []
  for (let i = 0; i < S.length; i++) {
    item.push(S[i])
    if (stack.length === 0 || S[i] === '(') {
      stack.push(S[i])
    } else {
      stack.pop()
      if (stack.length === 0) {
        if (item.length > 2) {
          item.pop()
          item.shift()
          res += item.join('')
        }
        item = []
      }
    }
  }
  return res
};
// @lc code=end

