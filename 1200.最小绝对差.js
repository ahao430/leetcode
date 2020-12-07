/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b)
  let res = []
  let min
  for (let i = 0; i < arr.length - 1; i++) {
    let delta = arr[i + 1] - arr[i]
    if (min == null || delta < min) {
      min = delta
    }
  }
  console.log(min)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === min) {
      res.push([arr[i], arr[i + 1]])
    }
  }
  return res
};
// @lc code=end

