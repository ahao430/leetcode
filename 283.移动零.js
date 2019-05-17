/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let len = nums.length;
  let record;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] === 0) {
      if (nums[i + 1] === 0) {
        if (record == null) record = i;
      } else {
        if (record != null) {
          swap(nums, record, i + 1);
          record++;
        } else {
          swap(nums, i, i + 1);
          record = i + 1;
        }
      }
    }
  }
};

function swap (arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[j] ^ arr[i];
  arr[i] = arr[i] ^ arr[j];
}
