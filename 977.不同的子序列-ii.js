/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 不同的子序列 II
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let res1 = [];
  let res2 = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      res1.unshift(A[i] ** 2);
    } else {
      res2.push(A[i] ** 2);
    }
  }

  if (res1.length === 0) return res2;
  if (res2.length === 0) return res1;

  let res = [];
  while (res1.length || res2.length) {
    if (res1.length === 0) {
      res.push(...res2);
      res2 = [];
    } else if (res2.length === 0) {
      res.push(...res1);
      res1 = [];
    } else if (res1[0] < res2[0]) {
      res.push(res1.shift());
    } else if (res1[0] > res2[0]) {
      res.push(res2.shift());
    } else {
      res.push(res1.shift(), res2.shift());
    }
  }
  return res;
};
