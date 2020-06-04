/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  console.log(S, T);
  while (S.indexOf('#') > -1) {
    S = S.replace(/.?#/, '');
  }
  while (T.indexOf('#') > -1) {
    T = T.replace(/.?#/, '');
  }
  console.log(S, T);
  return S === T;
};
