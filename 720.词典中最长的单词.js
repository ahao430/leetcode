/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */
/**
 * @param {string[]} words
 * @return {string}
 */
// var longestWord = function (words) {
//   let book = {};
//   let endArr = [];
//   // 初始化
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let len = word.length;
//     if (book[len] == null) {
//       book[len] = [word];
//     } else {
//       book[len].push(word);
//     }
//   }
//   // 从单字母开始向上查找
//   book[1].forEach(char => {
//     find(char, 2);
//   });
//   function find (str, i) {
//     book[i].forEach(nstr => {
//       if (nstr.indexOf(str) > -1) {
//         if (book[i + 1]) {
//           find(nstr, i + 1);
//         } else {
//           endArr.push(nstr);
//         }
//       } else {
//         endArr.push(str);
//       }
//     });
//   }
//   let maxArr = [];
//   let maxL = 0;
//   endArr.forEach(str => {
//     if (str.length > maxL) {
//       maxL = str.length;
//       maxArr = [str];
//     } else if (str.length === maxL) {
//       maxArr.push(str);
//     }
//   });
//   if (maxArr.length > 0) {
//     return maxArr.reduce((a, b) => {
//       return a < b ? a : b;
//     });
//   } else {
//     return '';
//   }
// };

var longestWord = function (words) {
  words.sort();
  let res = '';
  let book = {};
  words.forEach((str) => {
    if (str.length === 1 || book[str.slice(1)] || book[str.slice(0, str.length - 1)]) {
      book[str] = 1;
      if (str.length > res.length) res = str;
    }
  });
  return res;
};
