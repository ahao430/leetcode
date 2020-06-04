/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 仅仅反转字母
 */
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let book = {};
  for (let i = 0; i < order.length; i++) {
    book[order[i]] = i;
  }
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (book[words[i][j]] < book[words[i - 1][j]]) return false;
      else if (book[words[i][j]] > book[words[i - 1][j]]) break;
      else {
        if (j === words[i].length - 1 && words[i].length < words[i - 1].length) return false;
      };
    }
  }
  return true;
};
