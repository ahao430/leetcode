/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  let [day, month, year] = date.split(' ')
  // 处理月份
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  month = months.indexOf(month) + 1
  month = month < 10 ? '0' + month : month + ''
  // 处理日期
  day = Number.parseInt(day)
  day = day < 10 ? '0' + day : day + ''
  //
  return [year, month, day].join('-')
};
// @lc code=end

