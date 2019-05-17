/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let res = 0;
  let min = Math.min(...nums);
  for (let i = 0; i < nums.length; i++) {
    res += nums[i] - min;
  }
  return res;
};
