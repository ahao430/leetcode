/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let book = {};
  let max = 0;
  let maxArr = [];
  nums.forEach((num, index) => {
    if (book[num] == null) {
      book[num] = {
        start: index,
        end: index,
        count: 1,
      };
    } else {
      book[num].count = book[num].count + 1;
      book[num].end = index;
    }
    if (book[num].count > max) {
      max = book[num].count;
      maxArr = [book[num].end - book[num].start + 1];
    } else if (book[num].count === max) {
      maxArr.push(book[num].end - book[num].start + 1);
    }
  });
  return Math.min(...maxArr);
};
