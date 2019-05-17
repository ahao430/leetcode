/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfThree = function (n) {
//   if (n <= 0) return false;
//   while (n > 1) {
//     if (n % 3 === 0) {
//       n = n / 3;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// var isPowerOfThree = function (n) {
//   if (n <= 0) return false;
//   return /^10*$/.test(n.toString(3));
// };

var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  return 1162261467 % n === 0;
};
