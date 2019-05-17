/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let n = 2;
  let len = s.length;
  while (n <= len) {
    if (len % n === 0) {
      if (s === s.slice(0, len / n).repeat(n)) return true;
    }
    n++;
  }
  return false;
};
