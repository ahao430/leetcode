/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 煎饼排序
 */
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  let num = 1;
  while (num < N) {
    num = (num << 1) + 1;
  }
  return N ^ num;
};
