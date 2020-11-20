/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = run(candidates, target)
  return filter(res)

  function run (candidates, target) {
    let res = []
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] < target) {
        let res2 = run(candidates.slice(i + 1), target - candidates[i])
        res2.forEach(item => {
          res.push([candidates[i], ...item])
        })
      } else if (candidates[i] === target) {
        res.push([target])
      } else {
        continue
      }
    }
    return res
  }

  function filter (arr) {
    let book = {}
    arr.forEach(item => {
      item.sort((a, b) => a - b)
      let itemStr = item.join(',')
      if (!book[itemStr]) {
        book[itemStr] = 1
      }
    })
    return Object.keys(book).map(item => item.split(','))
  }
};
// @lc code=end

