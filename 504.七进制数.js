/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return '0';

  let symbol = '';
  if (num < 0) {
    symbol = '-';
    num = -num;
  }
  let res = '';
  while (num) {
    res = num % 7 + res;
    num = Math.floor(num / 7);
  }
  res = symbol + res;
  return res;
};
