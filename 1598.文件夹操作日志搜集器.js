/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let path = []
  for (let i = 0; i < logs.length; i++) {
    switch (logs[i]) {
      case './':
        break
      case '../':
        path.pop()
        break
      default:
        path.push(logs[i])
        break
    }
  }
  return path.length
};
// @lc code=end

