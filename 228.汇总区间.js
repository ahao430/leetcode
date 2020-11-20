/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let res = []
  let temp = []
  nums.forEach((num, index) => {
    if (temp.length === 0) {
      temp.push(num)
    } else {
      let last = nums[index - 1]
      if (num > last + 1) {
        if (temp[0] < last) {
          temp.push(last)
        }
        res.push(temp.join('->'))
        temp = [num]
      }
    }
  })
  if (temp.length) {
    let tail = nums[nums.length - 1]
    if (temp[0] !== tail) {
      temp.push(tail)
    }
    res.push(temp.join('->'))
  }
  return res
};
// @lc code=end

