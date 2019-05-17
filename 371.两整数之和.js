/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let sum = a ^ b;
  let carry = (a & b) << 1;
  if (carry === 0) return sum;
  else return getSum(sum, carry);
};
