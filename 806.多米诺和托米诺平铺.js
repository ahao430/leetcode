/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 多米诺和托米诺平铺
 */
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  if (S === '') return [0, 0];

  const MAX = 100;
  let l = 0;
  let count = 1;

  for (let i = 0; i < S.length; i++) {
    let index = S[i].charCodeAt() - 97;
    let width = widths[index];
    if (l + width <= MAX) {
      l += width;
    } else {
      l = width;
      count++;
    }
  }

  return [count, l];
};
