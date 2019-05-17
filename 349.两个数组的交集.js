/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let book = {};
  let arr = [];
  nums1.map(num => {
    book[num] = 1;
  });
  nums2.map(num => {
    if (book[num]) {
      arr.push(num);
    }
  });
  return [...new Set(arr)];
};
