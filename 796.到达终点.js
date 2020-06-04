/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 到达终点
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A === B) return true;
  if (A.length !== B.length) return false;

  let l = A.length;
  while (--l) {
    A = A.slice(1) + A[0];
    if (A === B) return true;
  }
  return false;
};
