/*
 * @lc app=leetcode.cn id=1560 lang=javascript
 *
 * [1560] 圆形赛道上经过次数最多的扇区
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
  let start = rounds[0]
  let j
  let k = rounds[rounds.length - 1]
  for (let i = rounds.length - 1; i > -1; i--) {
    if (rounds[i] === start) {
      j = rounds[i]
      break
    }
  }
  let arr = []
  if (j > k) {
    // 分成两段，j -> n, 1 -> k
    for (let num = 1; num <= k; num++) {
      arr.push(num)
    }
    for (let num = j; num <= n; num++) {
      arr.push(num)
    }
  } else {
    for (let num = j; num <= k; num++) {
      arr.push(num)
    }
  }
  return arr
};
// @lc code=end

