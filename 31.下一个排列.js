/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;
  let index = len - 1;
  while (index > 0) {
    // 倒序查找，如果遇到非递增，将末位数放到前面，前面数升序排列
    if (nums[index - 1] < nums[index]) {
      let start = len - 1;
      while (start > index) {
        if (nums[index - 1] < nums[start]) {
          [nums[index - 1], nums[start]] = [nums[start], nums[index - 1]];
          break;
        } else {
          start--;
        }
      }
      if (index === start) {
        [nums[index - 1], nums[index]] = [nums[index], nums[index - 1]];
        reverse(nums, index);
      } else {
        reverse(nums, index);
      }
      return nums;
    } else {
      index--;
    }
  }
  // 如果不存在更大排列，即为倒序排列，返回升序排列
  reverse(nums);
  return nums;

  function reverse (arr, i = 0, j = arr.length - 1) {
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
};
