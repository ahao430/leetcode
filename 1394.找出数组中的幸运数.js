/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] == null) map[arr[i]] = 0
    map[arr[i]]++
  }
  let lucky = -1
  console.log(map)
  for (let key in map) {
    if (+key === map[key]) {
      if (lucky < map[key]) lucky = map[key]
    }
  }
  return lucky
};
// @lc code=end

