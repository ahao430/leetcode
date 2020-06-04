/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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

var subsets = function(nums) {
  let res = [[]]
  for (let i = 1; i <= nums.length; i++) {
    res.push(...getNums(nums, i))
  }
  return res
};


// @lc code=end

