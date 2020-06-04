/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let chance = 1;
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (chance) {
        if (i === 1) {
          nums[i - 1] = nums[i];
        } else if (i === nums.length - 1) {
          return true;
        } else {
          if (nums[i] > nums[i - 2]) {
            nums[i - 1] = nums[i];
          } else {
            nums[i] = nums[i - 1];
          }
        }
        chance--;
      } else {
        return false;
      }
    }
  }
  return true;
};
