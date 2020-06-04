/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];
  for (let num = left; num <= right; num++) {
    if (isSelfDividingNumber(num)) {
      res.push(num);
    }
  }
  return res;
};

function isSelfDividingNumber (num) {
  if (num < 10) return true;
  let left = num;
  while (left) {
    if (num % (left % 10) !== 0) return false;
    left = Math.floor(left / 10);
  }
  return true;
}
