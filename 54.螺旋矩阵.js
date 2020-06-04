/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return []
  if (matrix.length === 1) return matrix[0]
  let iMin = 0
  let iMax = matrix.length - 1
  let jMin = 0
  let jMax = matrix[0].length - 1
  let count = (iMax + 1) * (jMax + 1)
  let i = 0
  let j = 0
  let res = []
  let direction = 'right'
  // 遍历
  while (res.length < count) {
    switch (direction) {
      case 'right':
        for (j = jMin; j <= jMax; j++) {
          res.push(matrix[i][j])
        }
        direction = 'down'
        j--
        iMin++
        i++
        break
      case 'down':
        for (; i <= iMax; i++) {
          res.push(matrix[i][j])
        }
        direction = 'left'
        i--
        jMax--
        j--
        break
      case 'left':
        for (; j >= jMin; j--) {
          res.push(matrix[i][j])
        }
        direction = 'up'
        j++
        iMax--
        i--
        break
      case 'up':
        for (; i >= iMin; i--) {
          res.push(matrix[i][j])
        }
        direction = 'right'
        i++
        jMin++
        j++
        break
    }
  }
  return res
};
// @lc code=end

