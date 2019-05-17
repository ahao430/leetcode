/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  let book = {};
  nums.slice().sort((a, b) => b - a).forEach((num, index) => {
    book[num] = index + 1;
  });
  return nums.map(num => {
    let val = book[num];
    switch (val) {
      case 1:
        return 'Gold Medal';
      case 2:
        return 'Silver Medal';
      case 3:
        return 'Bronze Medal';
      default:
        return val + '';
    }
  });
};
