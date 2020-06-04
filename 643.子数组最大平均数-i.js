/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let len = nums.length;
  let max;
  let sum;
  for (let i = 0; i < len - k + 1; i++) {
    if (sum == null) {
      sum = 0;
      for (let j = i; j < i + k; j++) {
        sum += nums[j];
      }
    } else {
      sum = sum - nums[i - 1] + nums[i + k - 1];
    }
    if (max == null || sum > max) {
      max = sum;
    }
  }
  return max / k;
};
