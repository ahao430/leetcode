/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let total = nums.length * nums[0].length;
  if (r * c !== total) return nums;

  let res = [];
  let rIndex = 0;
  let cIndex = 0;
  nums.forEach(row => {
    row.forEach(item => {
      if (res[rIndex] == null) res[rIndex] = [];
      res[rIndex].push(item);
      cIndex++;
      if (cIndex === c) {
        cIndex = 0;
        rIndex++;
      }
    });
  });
  return res;
};
