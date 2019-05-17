/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;

  let res = 0;
  let book = {};

  nums.map(num => {
    if (k === 0) {
      if (book[num] === 1) res++;
    } else {
      if (book[num + k] && book[num] == null) res++;
      if (book[num - k] && book[num] == null) res++;
    }

    if (book[num] != null) {
      book[num]++;
    } else {
      book[num] = 1;
    }
  });

  return res;
};
