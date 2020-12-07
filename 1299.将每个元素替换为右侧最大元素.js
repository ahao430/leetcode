/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  const len = arr.length
  // 从右向左
  let max = arr[len - 1]
  arr[len - 1] = -1
  for (let i = len - 2; i > -1; i--) {
    let lastMax = max
    if (arr[i] > max) max = arr[i]
    arr[i] = lastMax
  }
  return arr
};
// @lc code=end

