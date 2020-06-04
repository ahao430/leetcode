/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let len = nums.length;
  let min;
  let res;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let delta = Math.abs(target - sum);
        if (delta === 0) {
          return sum;
        } else {
          if (min == null || delta < min) {
            min = delta;
            res = sum;
          }
        }
      }
    }
  }
  return res;
};
