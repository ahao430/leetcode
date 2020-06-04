/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] Binary Search
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      continue;
    } else if (nums[i] === target) {
      return i;
    } else {
      return -1;
    }
  }
  return -1;
};
