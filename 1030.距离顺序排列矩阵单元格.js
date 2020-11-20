/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  let res = []
  res.push([r0, c0])
  let d = 1
  let dmax = Math.max(
    getDistance([0, 0], [r0, c0]),
    getDistance([R -1, 0], [r0, c0]),
    getDistance([0, C - 1], [r0, c0]),
    getDistance([R - 1, C - 1], [r0, c0]),
  )
  console.log(dmax)
  let i, j, flag
  while (d <= dmax) {
    // 向右下
    i = r0
    j = c0 - d
    flag = null
    if (j < 0) {
      i += 0 - j
      j = 0
    }
    while (j <= c0 && flag !== false) {
      pushValid(i, j)
      i++
      j++
    }
    // 向右上
    i = r0 + d - 1
    j = c0 + 1
    flag = null
    if (i > R - 1) {
      j += i - (R - 1)
      i = R - 1
    }
    while (i >= r0 && flag !== false) {
      pushValid(i, j)
      i--
      j++
    }
    // 向左上
    i = r0 - 1
    j = c0 + d - 1
    flag = null
    if (j > C - 1) {
      i -= j - (C - 1)
      j = C - 1
    }
    while (j >= c0 && flag !== false) {
      pushValid(i, j)
      i--
      j--
    }
    // 向左下
    i = r0 - d + 1
    j = c0 - 1
    flag = null
    if (i < 0) {
      j -= 0 - i
      i = 0
    }
    while (i < r0 && flag !== false) {
      pushValid(i, j)
      i++
      j--
    }

    d++
  }
  return res

  function pushValid (i, j) {
    if (i >= 0 && j >= 0 && i < R && j < C) {
      res.push([i, j])
      if (flag == null) {
        flag = true
      }
    } else {
      if (flag === true) {
        flag = false
      }
    }
  }

  function getDistance ([i1, j1], [i2, j2]) {
    return Math.abs(i1 - i2) + Math.abs(j1 - j2)
  }
};
// @lc code=end

