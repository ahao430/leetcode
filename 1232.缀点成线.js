/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const k = getK(coordinates[0], coordinates[1])
  let i = 2
  while (i < coordinates.length) {
    if (getK(coordinates[i], coordinates[0]) !== k) return false
    i++
  }
  return true

  function getK (a, b) {
    if (a[0] === b[0]) return Infinity
    return (b[1] - a[1]) / (b[0] - a[0])
  }
};
// @lc code=end

