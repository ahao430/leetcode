/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 长按键入
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  if (A[1] === A[3]) return A[1];
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      return A[i];
    }
  }
  return A[0];
};
