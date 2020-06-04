/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let book = {};
  let res = [];

  nums.sort((a, b) => a - b);

  run(0, target, []);

  return res;

  function run (start, target, use) {
    console.log(start, target, use);
    if (use.length === 4) {
      if (target === 0) {
        if (book[use.join(',')]) {
          res.push(use);
        }
      }
    } else if (start < nums.length) {
      run(start + 1, target - nums[start], [...use, nums[start]]);
      run(start + 1, target, use);
    }
  }
};
