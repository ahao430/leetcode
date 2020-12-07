/*
 * @lc app=leetcode.cn id=1496 lang=javascript
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let point = [0, 0]
  const map = {}
  map[point] = 1
  for (let i = 0; i < path.length; i++) {
    switch (path[i]) {
      case 'N':
        point[1]++
        break
      case 'S':
        point[1]--
        break
      case 'E':
        point[0]++
        break
      case 'W':
        point[0]--
        break
    }
    if (map[point]) {
      return true
    } else {
      map[point] = 1
    }
  }
  return false
};
// @lc code=end

