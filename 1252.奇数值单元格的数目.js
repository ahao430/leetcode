/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  const matrix = []

  let res = 0
  indices.forEach(([r,c]) => {
    for (let i = 0; i < n; i++) {
      add(i, c)
    }
    for (let j = 0; j < m; j++) {
      add(r, j)
    }
  })
  return res

  function add(r, c) {
    if (matrix[r] == null) matrix[r] = []
    if (matrix[r][c] == null) matrix[r][c] = 0

    matrix[r][c]++
    if (matrix[r][c] === 1) res++
    else {
      res--
      if (matrix[r][c] === 2) matrix[r][c] = 0
    }
  }
};
// @lc code=end

