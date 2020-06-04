/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 使序列递增的最小交换次数
 */
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let words = paragraph.toLowerCase().split(/\W+/).filter(word => !banned.includes(word));
  let book = {};
  let max = 0;
  let res = '';
  words.forEach(word => {
    if (book[word] == null) {
      book[word] = 1;
    } else {
      book[word]++;
    }
    if (book[word] > max) {
      max = book[word];
      res = word;
    }
  });
  return res;
};
