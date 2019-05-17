/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let z = x ^ y;
  let res = 0;
  while (z) {
    z = z & (z - 1);
    res++;
  }
  return res;
};
