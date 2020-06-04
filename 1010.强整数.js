/*
 * @lc app=leetcode.cn id=1010 lang=javascript
 *
 * [1010] 强整数
 */
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let count = 0;
  let book = {};

  for (let i = 0; i < time.length; i++) {
    let r = time[i] % 60;
    if (book[r] == null) {
      book[r] = 0;
    }
    book[r]++;
  }

  for (let key in book) {
    if (key === '0' || key === '30') {
      // Cn2
      count += (book[key] * (book[key] - 1) / 2);
    } else if (book[60 - key]) {
      // 相乘，删除
      count += (book[key] * book[60 - key]);
      delete book[key];
      delete book[60 - key];
    }
  }

  return count;
};
