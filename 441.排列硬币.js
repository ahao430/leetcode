/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let sum = 0;
  let index = 0;
  while (sum <= n) {
    sum += (index + 1);
    index++;
  }
  return index - 1;
};
