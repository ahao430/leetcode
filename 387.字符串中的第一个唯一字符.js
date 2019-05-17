/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function (s) {
//   let book = {};
//   let res = -1;
//   for (let i = 0; i < s.length; i++) {
//     if (book[s[i]] == null) {
//       book[s[i]] = i;
//     } else {
//       book[s[i]] = -1;
//     }
//   }
//   for (let key in book) {
//     if (book[key] !== -1) {
//       if (res === -1 || book[key] < res) {
//         res = book[key];
//       }
//     }
//   }
//   return res;
// };

var firstUniqChar = function (s) {
  let book = {};
  for (let i = 0; i < s.length; i++) {
    if (book[s[i]] == null) {
      book[s[i]] = 1;
    } else {
      book[s[i]]++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (book[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
