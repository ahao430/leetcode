/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b)
    compareLastTwo()
  }
  return stones.length ? stones[0] : 0

  function compareLastTwo() {
    let b = stones.pop()
    let a = stones.pop()
    if (a < b) {
      stones.unshift(b - a)
    }
  }
};
// @lc code=end

