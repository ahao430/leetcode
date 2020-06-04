/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;
  // 先对角线交换
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      matrix[i][j] ^= matrix[j][i];
      matrix[j][i] ^= matrix[i][j];
      matrix[i][j] ^= matrix[j][i];
    }
  }
  // 再水平翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < (len / 2) << 0; j++) {
      matrix[i][j] ^= matrix[i][len - 1- j];
      matrix[i][len - 1 - j] ^= matrix[i][j];
      matrix[i][j] ^= matrix[i][len - 1 - j];
    }
  }
};
// @lc code=end

