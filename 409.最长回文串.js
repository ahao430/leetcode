/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) return 0;
  let res = 0;
  let book = {};
  for (let i = 0; i < s.length; i++) {
    if (book[s[i]] == null) {
      book[s[i]] = 1;
    } else {
      book[s[i]] = null;
      res += 2;
    }
  }
  if (res < s.length) {
    res += 1;
  }
  return res;
};
