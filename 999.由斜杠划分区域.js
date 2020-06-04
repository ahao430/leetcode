/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 由斜杠划分区域
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const len = 8;
  let count = 0;
  // 找到车
  const [rx, ry] = getRook();
  // 向四个方向移动
  move(rx, ry, 'up');
  move(rx, ry, 'down');
  move(rx, ry, 'left');
  move(rx, ry, 'right');

  return count;

  function getRook () {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (board[i][j] === 'R') {
          return [i, j];
        }
      }
    }
  }

  function move (x, y, direction) {
    switch (direction) {
      case 'up':
        if (y > 0) {
          let next = board[x][y - 1];
          if (next === '.') move(x, y - 1, 'up');
          else if (next === 'p') count++;
        }
        break;
      case 'down':
        if (y < len - 1) {
          let next = board[x][y + 1];
          if (next === '.') move(x, y + 1, 'down');
          else if (next === 'p') count++;
        }
        break;
      case 'left':
        if (x > 0) {
          let next = board[x - 1][y];
          if (next === '.') move(x - 1, y, 'left');
          else if (next === 'p') count++;
        }
        break;
      case 'right':
        if (x < len - 1) {
          let next = board[x + 1][y];
          if (next === '.') move(x + 1, y, 'right');
          else if (next === 'p') count++;
        }
        break;
    }
  }
};
