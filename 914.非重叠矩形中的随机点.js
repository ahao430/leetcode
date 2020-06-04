/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 非重叠矩形中的随机点
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length < 2) return false;

  let book = {};
  for (let i = 0; i < deck.length; i++) {
    if (book[deck[i]] == null) {
      book[deck[i]] = 1;
    } else {
      book[deck[i]]++;
    }
  }

  let nums = Object.values(book);
  let min = Math.min(...nums);
  let index = 2;

  while (index < min + 1) {
    if (nums.every(num => num % index === 0)) {
      return true;
    } else {
      index++;
    }
  }

  return false;
};
