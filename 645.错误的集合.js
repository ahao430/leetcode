/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let n = nums.length;
  let book = {};
  let miss;
  let repeat;
  for (let i = 0; i < n; i++) {
    if (book[nums[i]] == null) {
      book[nums[i]] = 1;
    } else {
      repeat = nums[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (book[i + 1] == null) {
      miss = i + 1;
      break;
    };
  }
  return [repeat, miss];
};
