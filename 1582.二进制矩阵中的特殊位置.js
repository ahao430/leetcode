/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  // 找到每一行只有一个1的行和每一列只有一个1的列
  let oneRows = []
  let oneCols = []
  for (let i = 0; i < mat.length; i++) {
    let countOne = 0
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) countOne++
      if (countOne > 1) break
    }
    if (countOne === 1) oneRows.push(i)
  }
  for (let j = 0; j < mat[0].length; j++) {
    let countOne = 0
    for (let i = 0; i < mat.length; i++) {
      if (mat[i][j] === 1) countOne++
      if (countOne > 1) break
    }
    if (countOne === 1) oneCols.push(j)
  }
  let count = 0
  for (let i = 0; i < oneRows.length; i++) {
    for (let j = 0; j < oneCols.length; j++) {
      if (mat[oneRows[i]][oneCols[j]] === 1) count++
    }
  }
  return count
};
// @lc code=end

