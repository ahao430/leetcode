/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let res = []
  let flag = false
  let i, j
  intervals.forEach((item) => {
    if (flag) {
      res.push(item)
    } else {
      // 比较item和newInterval
      if (item[0] > newInterval[1]) {
        if (i) {
          j = newInterval[1]
          res.push([i, j])
          res.push(item)
          flag = true
        } else {
          res.push(newInterval)
          res.push(item)
          flag = true
        }
      } else if (item[0] === newInterval[1]) {
        if (i) {
          j = newInterval[1]
          res.push([i, j])
          flag = true
        } else {
          res.push([newInterval[0], item[1]])
          flag = true
        }
      } else if (item[1] < newInterval[0]) {
        res.push(item)
      } else if (item[1] === newInterval[0]) {
        i = item[0]
      } else {
        if (item[1] < newInterval[1]) {
          i = item[0]
        } else {
          res.push(item)
          flag = true
        }
      }
    }
  })
  return res
};
// @lc code=end

