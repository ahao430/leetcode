/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let index = 0;
  let res = '';
  while (index < s.length) {
    res += s.slice(index, index + k).split('').reverse().join('');
    res += s.slice(index + k, index + 2 * k);
    index += 2 * k;
  }
  return res;
};
