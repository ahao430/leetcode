/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const iMax = grid.length - 1
  const jMax = grid[0].length - 1
  const book = {}
  return calc(0, 0, 0)

  function calc (sum, i, j) {
    if (book[i + ',' + j]) return sum + grid[i][j] + book[i + ',' + j]

    if (i < iMax && j < jMax) {
      book[i + ',' + j] = Math.min(calc(0,i+1,j), calc(0, i, j+1))
    } else if (i < iMax && j >= jMax) {
      book[i + ',' + j] = calc(0,i+1,j)
    } else if (i >= iMax && j < jMax) {
      book[i + ',' + j] = calc(0, i, j+1)
    } else {
      book[i + ',' + j] = 0
    }
    return sum + grid[i][j] + book[i + ',' + j]
  }
};
// @lc code=end

