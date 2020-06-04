/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 最小差值 I
 */
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  let total = A[0].length;
  let wrong = 0;
  for (let i = 0; i < total; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        wrong++;
        break;
      }
    }
  }
  return wrong;
};
