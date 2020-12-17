/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  // 每个整数 互不相同

  for (let i = 0; i < pieces.length; i++) {
    if (!checkPieceItem(pieces[i])) return false
  }
  return true

  function checkPieceItem (piece) {
    let i = 0
    for (let i = 0; i < arr.length - piece.length + 1; i++) {
      if (arr[i] === piece[0]) {
        for (let j = 1; j < piece.length; j++) {
          if (arr[i + j] !== piece[j]) return false
        }
        return true
      }
    }
    return false
  }
};
// @lc code=end

