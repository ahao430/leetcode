/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 相似度为 K 的字符串
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  let arr = A.split(' ').concat(B.split(' '));
  let book = {};
  arr.forEach(word => {
    if (book[word] == null) {
      book[word] = 1;
    } else {
      book[word]++;
    }
  });
  let res = [];
  for (let key in book) {
    if (book[key] === 1) {
      res.push(key);
    }
  }
  return res;
};
