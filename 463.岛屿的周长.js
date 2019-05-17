/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let lenR = grid.length;
  let lenC = grid[0].length;
  let res = 0;
  for (let i = 0; i < lenR; i++) {
    for (let j = 0; j < lenC; j++) {
      if (grid[i][j] === 1) {
        res += 4;
        if (i > 0 && grid[i - 1][j] === 1) {
          res -= 2;
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          res -= 2;
        }
      }
      // 上下左右查找
    }
  }
  return res;
};
