/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const len = arr.length;
  const l = Math.floor(len / 4) + 1
  for (let i = 0; i < len - l - 1; i++) {
    let num = arr[i]
    for (let j = i + 1; j < i + l; j++) {
      if (arr[j] !== num) {
        num = null
        break
      }
    }
    if (num) return num
  }
  return arr[len - l]
};
// @lc code=end

