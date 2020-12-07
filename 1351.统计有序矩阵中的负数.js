/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  if (grid.length === 0) return 0;
  if (grid[0].length === 0) return 0;

  const lr = grid.length
  const lc = grid[0].length
  let count = 0
  let i = 0
  let j = lc - 1

  // 从上往下，向左找第一个负数位置
  while (i < lr) {
    while (grid[i][j] < 0) {
      j--
    }
    count += lc - 1 - j
    i++
  }

  return count
};
// @lc code=end

