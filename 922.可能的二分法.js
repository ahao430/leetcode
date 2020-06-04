/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 可能的二分法
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let res = [];
  let c1 = 0;
  let c2 = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      res[c1] = A[i];
      c1 += 2;
    } else {
      res[c2] = A[i];
      c2 += 2;
    }
  }
  return res;
};
