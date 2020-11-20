/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let map = {}
  for (let i = 0; i < arr2.length; i++) {
    map[arr2[i]] = i
  }
  let book = {}
  let tail = []
  for (let i = 0; i < arr1.length; i++) {
    if (map[arr1[i]] == null) {
      tail.push(arr1[i])
    } else if (book[arr1[i]] == null) {
      book[arr1[i]] = 1
    } else {
      book[arr1[i]] += 1
    }
  }
  tail.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < book[arr2[i]]; j++) {
      res.push(arr2[i])
    }
  }
  res = res.concat(tail)
  return res
};
// @lc code=end

