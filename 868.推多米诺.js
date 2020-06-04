/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 推多米诺
 */
/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
  let arr = [];
  let index = 0;
  while (N > 0) {
    if (N % 2 === 1) {
      arr.push(index);
    };
    N = (N / 2) << 0;
    index++;
  }
  let max = 0;
  arr.reduce((a, b) => {
    if (b - a > max) max = b - a;
    return b;
  });
  return max;
};
