/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  const time1 = new Date(date1).getTime()
  const time2 = new Date(date2).getTime()
  let delta = Math.abs(time1 - time2)
  const ONE_DAY = 24 * 3600 * 1000

  return delta / ONE_DAY
};
// @lc code=end

