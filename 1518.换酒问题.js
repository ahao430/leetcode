/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let full = numBottles
  let empty = 0
  let drink = 0
  while (full) {
    // drink
    drink += full
    empty += full
    full = 0
    // change
    full = Math.floor(empty / numExchange)
    empty = empty % numExchange
  }
  return drink
};
// @lc code=end

