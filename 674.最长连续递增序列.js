/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let len = nums.length;
  if (len === 0) return 0;

  let max = 1;
  let start = 0;
  let end = 0;
  for (let i = 1; i < len; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (end - start + 1 > max) max = end - start + 1;
      start = i;
      end = i;
      if (i + max >= len) return max;
    } else {
      end = i;
    }
  }
  if (end - start + 1 > max) max = end - start + 1;
  return max;
};
