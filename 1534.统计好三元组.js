/*
 * @lc app=leetcode.cn id=1534 lang=javascript
 *
 * [1534] 统计好三元组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  let res = 0
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          console.log(i,j,k)
          res++
        }
      }
    }
  }
  return res
};
// @lc code=end

