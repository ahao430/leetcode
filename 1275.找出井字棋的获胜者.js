/*
 * @lc app=leetcode.cn id=1275 lang=javascript
 *
 * [1275] 找出井字棋的获胜者
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  // 棋盘
  const board = [[null, null, null], [null, null, null], [null, null, null]]
  // 走棋
  let turn = 'A'
  let step = 0
  while (step < moves.length) {
    const [x, y] = moves[step]
    if (turn === 'A') {
      board[x][y] = 'A'
      turn = 'B'
    } else {
      board[x][y] = 'B'
      turn = 'A'
    }
    step++
  }
  // 判断
  for (let i = 0; i < 3; i++) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) return board[i][0]
  }
  for (let j = 0; j < 3; j++) {
    if (board[0][j] && board[0][j] === board[1][j] && board[0][j] === board[2][j]) return board[0][j]
  }
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) return board[0][0]
  if (board[1][1] && board[2][0] === board[1][1] && board[1][1] === board[0][2]) return board[1][1]
  if (moves.length < 9) return 'Pending'
  return 'Draw'
};
// @lc code=end

