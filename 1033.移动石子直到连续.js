/*
 * @lc app=leetcode.cn id=1033 lang=javascript
 *
 * [1033] 移动石子直到连续
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  // sort
  sort()

  let min, max;
  if (a + 1 === b && b + 1 === c) {
    // 连续，都是0
    min = 0
    max = 0
  } else {
    if (a + 1 === b || a + 2 === b || b + 1 === c || b + 2 === c) {
      // 一侧连续或一侧间隔1， 最少1次
      min = 1
    } else {
      // 最少2次
      min = 2
    }
    max = (b - a - 1) + (c - b - 1)
  }

  return [min, max]

  function sort () {
    if (a > b) {
      [a, b] = [b, a]
    }
    if (b > c) {
      [b, c] = [c, b]
    }
    if (a > b) {
      [a, b] = [b, a]
    }
  }
};
// @lc code=end

