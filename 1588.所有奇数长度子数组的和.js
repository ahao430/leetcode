/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let sum = 0
  const len = arr.length
  const maxOdd = len % 2 === 0 ? (len - 1) : len
  let i = 0, j = len - 1
  while (i <= j) {
    let count = getCount(i)
    sum += arr[i] * count
    if (i < j) {
      sum += arr[j] * count
    }
    i++
    j--
  }
  return sum

  function getCount(i) {
    let count = 0
    let l = 1
    while (l <= maxOdd) {
      count += (Math.min(i, len - l) - Math.max(0, i - l + 1) + 1)
      l += 2
    }
    return count
  }
};
// @lc code=end

