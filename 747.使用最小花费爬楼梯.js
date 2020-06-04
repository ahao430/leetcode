/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 使用最小花费爬楼梯
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max = Math.max(...nums);
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max && index === -1) {
      index = i;
    } else if (nums[i] * 2 > max) return -1;
  }
  return index;
};
