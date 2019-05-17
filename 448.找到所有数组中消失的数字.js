/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1]);
  }
  console.log(nums);
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
};
