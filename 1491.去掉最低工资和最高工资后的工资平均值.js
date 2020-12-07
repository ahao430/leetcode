/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let sum = 0
  let min = salary[0]
  let max = salary[0]
  const len = salary.length
  for (let i = 0; i < len; i++) {
    sum += salary[i]
    if (salary[i] < min) {
      min = salary[i]
    }
    if (salary[i] > max) {
      max = salary[i]
    }
  }
  return (sum - min - max) / (len - 2)
};
// @lc code=end

