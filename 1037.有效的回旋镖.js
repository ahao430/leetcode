/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const [a, b, c] = points

  // 有相同点， false
  if (same(a, b) || same(b, c) || same(a, c)) return false
  // 相同x值，false
  if (a[0] === b[0] && b[0] === c[0]) return false
  // 计算斜率
  if (getK(a, b) === getK(b, c)) return false

  return true

  function same ([x1, y1], [x2, y2]) {
    return x1 === x2 && y1 === y2
  }
  function getK ([x1, y1], [x2, y2]) {
    return (y2 - y1) / (x2 - x1)
  }
};
// @lc code=end

