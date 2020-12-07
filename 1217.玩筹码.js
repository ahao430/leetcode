/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let countOdd = 0
  let countEven = 0
  position.forEach(num => {
    if (num % 2 === 0) {
      countEven++
    } else {
      countOdd++
    }
  })
  return Math.min(countOdd, countEven)
};
// @lc code=end

