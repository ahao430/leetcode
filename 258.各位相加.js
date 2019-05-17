/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // while (num > 9) {
  //   let temp = 0;
  //   while (num > 9) {
  //     temp += num % 10;
  //     num = Math.floor(num / 10);
  //   }
  //   temp += num;
  //   num = temp;
  // }
  // return num;

  return (num - 1) % 9 + 1;
};
