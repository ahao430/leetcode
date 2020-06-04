/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let arr = []
  let res = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  dfs('', arr)
  return res[k - 1]

  function dfs (left, right) {
    if (right.length === 0) {
      res.push(left)
    } else {
      for (let i = 0; i < right.length; i++) {
        dfs(left + right[i], [...right.slice(0, i), ...right.slice(i + 1)])
      }
    }
  }
};
// @lc code=end

