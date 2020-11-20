/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (x > y) return canMeasureWater(y, x, z)
  // return [x, y, y - x, 2 * (y - x), 2 * x - y].includes(z)
};
// @lc code=end

