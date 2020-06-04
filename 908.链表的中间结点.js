/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 链表的中间结点
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  let min = A[0];
  let max = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    } else if (A[i] > max) {
      max = A[i];
    }
  }

  let delta = max - min;
  if (delta > K * 2) {
    return delta - K * 2;
  } else {
    return 0;
  }
};
