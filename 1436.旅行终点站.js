/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const map = {}
  paths.forEach(([from, to]) => {
    map[from] = to
  })
  let city = paths[0][1]
  while (map[city]) {
    city = map[city]
  }
  return city
};
// @lc code=end

