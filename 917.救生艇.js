/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 救生艇
 */
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let str = S.replace(/[^a-zA-Z]/g, '').split('');
  let res = '';
  return S.replace(/[a-zA-Z]/g, () => str.pop());
};
