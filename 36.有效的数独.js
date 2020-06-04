/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 9 x 9
  const LEN = 9
  let book = {
    rows: [],
    cols: [],
    blocks: [],
  }
  for (let i = 0; i < LEN; i++) {
    for (let j = 0; j < LEN; j++) {
      let num = board[i][j]
      if (num === '.') continue
      // 验证行
      if (!checkRow(i,num)) return false
      // 验证列
      if (!checkCol(j, num)) return false
      // 验证块
      let k = ((i / 3) << 0) * 3 + ((j / 3) << 0)
      if (!checkBlock(k, num)) return false
    }
  }
  return true

  function checkRow(i, num) {
    if (book.rows[i] == null) book.rows[i] = {}
    if (book.rows[i][num]) {
      return false
    }
    book.rows[i][num] = true
    return true
  }
  function checkCol(j, num) {
    if (book.cols[j] == null) book.cols[j] = {}
    if (book.cols[j][num]) {
      return false
    }
    book.cols[j][num] = true
    return true
  }
  function checkBlock(k, num) {
    if (book.blocks[k] == null) book.blocks[k] = {}
    if (book.blocks[k][num]) {
      return false
    }
    book.blocks[k][num] = true
    return true
  }
};
// @lc code=end

