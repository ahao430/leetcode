/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let res = new Array(num_people).fill(0)
  let i = 0
  let num = 1
  while (candies) {
    if (candies <= num) {
      res[i] += candies
      candies = 0
    } else {
      res[i] += num
      candies -= num
    }
    i++
    num++
    if (i === num_people) i = 0
  }
  return res
};
// @lc code=end

