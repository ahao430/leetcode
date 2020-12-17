/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a, b) => a - b)
  const len = arr.length
  const delLen = Math.round(len / 20)

  let sum = 0
  for (let i = delLen; i < len -delLen; i++) {
    sum += arr[i]
  }
  return sum / (len - delLen * 2)
};
// @lc code=end

