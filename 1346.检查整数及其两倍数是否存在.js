/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i] * 2] != null) return true
    if (map[arr[i] / 2] != null) return true
    if (map[arr[i]] == null) map[arr[i]] = i
  }
  return false
};
// @lc code=end

