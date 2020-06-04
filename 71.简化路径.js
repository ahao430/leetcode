/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const arr = []
  const pathArr = path.split(/\/+/).filter(item => item !== '')
  for (let item of pathArr) {
    if (item === '.') {
      // do nothing
    } else if (item === '..') {
      arr.pop()
    } else {
      arr.push(item)
    }
  }
  return '/' + arr.join('/')
};
// @lc code=end

