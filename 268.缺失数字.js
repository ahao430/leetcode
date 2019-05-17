/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
};
