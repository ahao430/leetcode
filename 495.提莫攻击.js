/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let time = 0
  let startTime = 0
  let endTime = 0
  timeSeries.forEach(item => {
    if (endTime > item) {
      endTime = item
    }
    time += endTime - startTime
    startTime = item
    endTime = item + duration
  })
  time += (endTime - startTime)
  return time
};
// @lc code=end

