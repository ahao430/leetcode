/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  if (grid.length === 0) return []

  let res = []
  const lr = grid.length
  const lc = grid[0].length
  for (let i = 0; i < lr; i++) {
    res[i] = []
    for (let j = 0; j < lc; j++) {
      res[i][j] = getShiftCell(i, j, k)
    }
  }
  return res

  function getShiftCell(i, j, k) {
    j -= (k % lc)
    i -= (Math.floor(k / lc) % lr)
    if (j < 0) {
      i--
      j += lc
    }
    if (i < 0) i += lr
    return grid[i][j]
  }
};
// @lc code=end

