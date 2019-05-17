/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return '0';

  if (num < 0) num = 16 ** 8 + num;
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let res = '';
  while (num) {
    res = arr[num % 16] + res;
    num = (num / 16) << 0;
  }
  return res;
};
