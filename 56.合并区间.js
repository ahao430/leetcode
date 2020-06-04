/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < intervals.length - 1; i++) {
    let cur = intervals[i]
    let next = intervals[i+1]
    if (cur[0] > next[1] || cur[1] < next[0]) {
      // do nothing
    } else {
      intervals[i] = [Math.min(cur[0], next[0]), Math.max(cur[1], next[1])]
      intervals.splice(i+1, 1)
      return merge(intervals)
    }
  }
  return intervals
};
// @lc code=end

