/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let sum = 0
  let j = 0; // 从左向右
  let k = mat[0].length - 1; // 从右向左
  for (let i = 0; i < mat.length; i++) {
    if (j !== k) {
      sum += mat[i][j] + mat[i][k]
    } else {
      sum += mat[i][j]
    }
    j++
    k--
  }
  return sum
};
// @lc code=end

