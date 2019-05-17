/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let len = s.length;
  let half = Math.floor(len / 2);
  for (let i = 0; i < half; i++) {
    swap(s, i, len - 1 - i);
  }
  return s;

  function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};
