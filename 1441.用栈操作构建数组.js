/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  let i = 0
  let j = 1
  let res = []
  while (i < target.length) {
    if (target[i] === j) {
      res.push('Push')
      i++
      j++
    } else if (target[i] > j) {
      res.push('Push', 'Pop')
      j++
    }
  }
  return res
};
// @lc code=end

