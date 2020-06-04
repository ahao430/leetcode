/*
 * @lc app=leetcode.cn id=840 lang=javascript
 *
 * [840] Magic Squares In Grid
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length - 2; j++) {
      if (isMagicSquare(grid, i, j)) count++;
    }
  }
  return count;

  function isMagicSquare (grid, i, j) {
    let nums = [
      grid[i][j],
      grid[i][j + 1],
      grid[i][j + 2],
      grid[i + 1][j],
      grid[i + 1][j + 1],
      grid[i + 1][j + 2],
      grid[i + 2][j],
      grid[i + 2][j + 1],
      grid[i + 2][j + 2],
    ];
    if (nums.sort().join(',') !== '1,2,3,4,5,6,7,8,9') return false;

    let sum = 15;
    if (grid[i][j] + grid[i][j + 1] + grid[i][j + 2] !== sum) return false;
    if (grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2] !== sum) return false;
    if (grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2] !== sum) return false;
    if (grid[i][j] + grid[i + 1][j] + grid[i + 2][j] !== sum) return false;
    if (grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1] !== sum) return false;
    if (grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2] !== sum) return false;
    if (grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] !== sum) return false;
    if (grid[i + 2][j] + grid[i + 1][j + 1] + grid[i][j + 2] !== sum) return false;
    return true;
  }
};
