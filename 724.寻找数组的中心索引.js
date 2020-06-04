/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length === 0) return -1;

  let sum = nums.reduce((a, b) => a + b);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left === sum - left - nums[i]) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};
