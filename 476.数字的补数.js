/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */
/**
 * @param {number} num
 * @return {number}
 */
// var findComplement = function (num) {
//   let sum = '0b' + '1'.repeat(num.toString(2).length);
//   return sum - num;
// };

var findComplement = function (num) {
  let temp = num;
  let sum = 0;
  // 得到num二进制位数的全是1的数
  while (temp > 0) {
    temp >>= 1;
    sum = (sum << 1) + 1;
  }
  // 异或得到补数
  return sum ^ num;
};
