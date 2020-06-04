/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 镜面反射
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let sumA = 0;
  let sumB = 0;
  let bookB = {};

  for (let i = 0; i < A.length; i++) {
    sumA += A[i];
  }

  for (let j = 0; j < B.length; j++) {
    sumB += B[j];
  }

  let delta = (sumA - sumB) / 2;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] - delta === B[j]) {
        return [A[i], B[j]];
      }
    }
  }
  return [];
};
