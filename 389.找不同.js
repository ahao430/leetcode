/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function (s, t) {
//   let book = {};
//   for (let i = 0; i < s.length; i++) {
//     if (book[s[i]] == null) {
//       book[s[i]] = 1;
//     } else {
//       book[s[i]]++;
//     }
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (book[t[i]] == null) {
//       return t[i];
//     } else {
//       if (book[t[i]] === 0) return t[i];
//       book[t[i]]--;
//     }
//   }
// };

var findTheDifference = function (s, t) {
  let str = s + t;
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res ^= str.charCodeAt(i);
  }
  return String.fromCodePoint(res);
};
