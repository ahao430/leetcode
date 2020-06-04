/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (nums.length < 2) return 0;

  let sorted = nums.slice();
  sorted.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let fi = true;
  let fj = true;
  while (i < j && (fi || fj)) {
    if (nums[i] === sorted[i]) {
      i++;
    } else {
      fi = false;
    }
    if (nums[j] === sorted[j]) {
      j--;
    } else {
      fj = false;
    }
  }
  return i === j ? 0 : j - i + 1;
};
