/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 扁平化多级双向链表
 */
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let line = matrix[0];
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < line.length - 1; j++) {
      if (line[j] !== matrix[i][j + 1]) {
        return false;
      }
    }
    line = matrix[i];
  }
  return true;
};
