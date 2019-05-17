/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let book = {};
  let res = [];
  nums1.map(num => {
    book[num] = book[num] ? book[num] + 1 : 1;
  });
  nums2.map(num => {
    if (book[num]) {
      book[num] -= 1;
      res.push(num);
    }
  });
  return res;
};
