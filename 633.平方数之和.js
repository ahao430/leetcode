/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let sc = Math.sqrt(c);
  for (let i = 0; i <= sc; i++) {
    if (Math.sqrt(c - i ** 2) % 1 === 0) return true;
  }
  return false;
};
