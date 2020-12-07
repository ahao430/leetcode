/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  // 矩阵中数字各不相同，不考虑多个最大值或最小值相等
  let res = []
  // 获取每一行最小值
  let rowMins = []
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i]
    let rowMin = row[0]
    let rowMinCol = 0
    for (let j = 1; j < row.length; j++) {
      if (row[j] < rowMin) {
        rowMin = row[j]
        rowMinCol = j
      }
    }
    rowMins.push(rowMinCol)
  }
  // 获取每一列最大值
  let colMaxes = []
  for (let j = 0; j < matrix[0].length; j++) {
    let colMax = matrix[0][j]
    let colMaxRow = 0
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i][j] > colMax) {
        colMax = matrix[i][j]
        colMaxRow = i
      }
    }
    colMaxes.push(colMaxRow)
  }
  // 遍历每行最小值所在列，看是否在每列最大值行数中
  rowMins.forEach((colIndex, rowIndex) => {
    if (colMaxes[colIndex] === rowIndex) {
      res.push(matrix[rowIndex][colIndex])
    }
  })

  return res
};
// @lc code=end

