/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

  const arr = []
  let  i = 0
  while (i++ < n) {
    arr.push(i)
  }
  return getNums(arr, k)

  function getNums (arr, k) {
    if (arr.length < k) return []
    if (arr.length === k) return [arr]
    if (k === 1) return arr.map(item => ([item]))
    let res = []
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr.slice(i + 1)
      let next = getNums(newArr, k - 1)
      next.forEach(item => res.push([arr[i], ...item]))
    }
    return res
  }
};
// @lc code=end

