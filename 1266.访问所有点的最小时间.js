/*
 * @lc app=leetcode.cn id=1266 lang=javascript
 *
 * [1266] 访问所有点的最小时间
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let res = 0
  for (let i = 0; i < points.length - 1; i++) {
    let [x1, y1] = points[i]
    let [x2, y2] = points[i + 1]
    res += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1))
  }
  return res
};
// @lc code=end

