/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 方阵中战斗力最弱的 K 行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  let mins = []
  let idxes = []
  for (let i = 0; i < mat.length; i++) {
    let row = mat[i]
    let count = 0
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) count++
    }
    for (let j = 0; j < k; j++) {
      if (mins[j] == null || count < mins[j]) {
        addMin(j, count, i)
        break
      }
    }
  }
  return idxes

  function addMin(insertIndex, count, rowIndex) {
    mins.splice(insertIndex, 0, count)
    idxes.splice(insertIndex, 0, rowIndex)
    if (mins.length > k) {
      mins.pop()
      idxes.pop()
    }
  }
};
// @lc code=end

