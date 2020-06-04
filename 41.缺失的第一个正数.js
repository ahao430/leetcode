/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let len = nums.length;
  let count = 0;
  nums.forEach((num, i) => {
    if (num !== 1) {
      count++;
    }
    if (num <= 0) {
      nums[i] = 1;
    }
  });
  if (count === len) return 1;
  nums.forEach(num => {
    let n = Math.abs(num);
    if (n > 0 && n <= len) {
      if (nums[n - 1] > 0) {
        nums[n - 1] = -nums[n - 1];
      }
    }
  });
  for (let i = 1; i <= len; i++) {
    if (nums[i - 1] > 0) {
      return i;
    }
  }
  return len + 1;
};
