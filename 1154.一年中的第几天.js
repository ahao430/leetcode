/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  let [year,month,day] = date.split('-').map(item => parseInt(item, 10))

  let monthDays = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    monthDays[1] = 29
  }
  let res = day
  for (let i = 0; i < month - 1; i++) {
    res += monthDays[i]
  }
  return res
};
// @lc code=end

