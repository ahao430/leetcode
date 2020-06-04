/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] 单值二叉树
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
  A.sort((a, b) => a - b);
  let i = 0;
  while (K) {
    if (A[i] < 0) {
      A[i] = -A[i];
      i++;
      K--;
    } else {
      A.sort((a, b) => a - b);
      K %= 2;
      if (K === 1) {
        A[0] = -A[0];
        break;
      }
    }
  }
  return A.reduce((a, b) => a + b);
};
