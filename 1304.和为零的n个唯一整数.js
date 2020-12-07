/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  if (n === 0) return [0]
  let res = []
  let count
  if (n % 2 === 1) {
    res.push(0)
    count = Math.floor(n / 2)
  } else {
    count = n / 2
  }
  while(count){
    res.push(count, -count)
    count--
  }

  return res
};
// @lc code=end

