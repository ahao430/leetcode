/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length <= 0 || board[0].length <= 0) return board

  // 找到边界上的O，标记为-O
  const rowLen = board.length
  const colLen = board[0].length
  for (let i = 0; i < rowLen; i++) {
    if (i === 0 || i === rowLen - 1) {
      for (let j = 0; j < colLen; j++) {
        if (board[i][j] === 'O') {
          searchFrom(i, j)
        }
      }
    } else {
      if (board[i][0] === 'O') {
        searchFrom(i, 0)
      }
      if (board[i][colLen - 1] === 'O') {
        searchFrom(i, colLen - 1)
      }
    }
  }
  // search这些-O相连的O，标记
  function searchFrom (i, j) {
    if (board[i][j] === 'O') {
      board[i][j] = '-O'
      if (board[i - 1] && board[i - 1][j] && board[i - 1][j] === 'O') {
        searchFrom(i - 1, j)
      }
      if (board[i + 1] && board[i + 1][j] && board[i + 1][j] === 'O') {
        searchFrom(i + 1, j)
      }
      if (board[i][j - 1] && board[i][j - 1] === 'O') {
        searchFrom(i, j - 1)
      }
      if (board[i][j + 1] && board[i][j + 1] === 'O') {
        searchFrom(i, j + 1)
      }
    }
  }

  // 遍历，所有的O替换为X，-O替换为O
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '-O') {
        board[i][j] = 'O'
      }
    }
  }
};
// @lc code=end

