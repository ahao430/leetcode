/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) {
    return [nums];
  }
  let res = [];
  nums.forEach((num, index) => {
    let rest = nums.filter(i => i !== num);

    let restPermute = permute(rest);
    restPermute.forEach(restItem => {
      res.push([num, ...restItem]);
    });
  });
  return res;
};
// @lc code=end
