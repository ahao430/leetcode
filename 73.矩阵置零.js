/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const zeroCols = {}
  const zeroRows = {}
  for (let i = 0; i < matrix.length; i++) {
    // if (zeroRows[i]) continue
    for (let j = 0; j < matrix[i].length; j++) {
      // if (zeroCols[j]) continue
      if (matrix[i][j] === 0) {
        zeroRows[i] = 1
        zeroCols[j] = 1
      }
    }
  }
  console.log(zeroRows)
  console.log(zeroCols)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        matrix[i][j] = 0
      }
    }
  }
};
// @lc code=end

