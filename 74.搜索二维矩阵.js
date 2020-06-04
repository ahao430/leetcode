/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  if (target < matrix[0][0]) return false

  let x
  let y
  // 找到所在行
  for (let i = 0; i < matrix.length; i++) {
    if (target === matrix[i][0]) {
      return true
    } else if (target > matrix[i][0]) {
      x = i
    }
  }
  // 找到所在列
  if (matrix[x].length > 1) {
    for (let j = 1; j < matrix[x].length; j++) {
      if (target === matrix[x][j]) {
        return true
      }
    }
  }
  return false
};
// @lc code=end

