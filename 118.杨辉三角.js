/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (61.04%)
 * Total Accepted:    20.2K
 * Total Submissions: 33.1K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  let i = 1
  while (i <= numRows) {
    if (i === 1) {
      res.push([1])
    } else if (i === 2) {
      res.push([1, 1])
    } else {
      let last = res[res.length - 1]
      let arr = [1]
      last.reduce((a, b) => {
        arr.push(a + b)
        return b
      })
      arr.push(1)
      res.push(arr)
    }
    i++
  }
  return res
};

