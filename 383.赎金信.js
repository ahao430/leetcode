/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  ransomNote = ransomNote.split('');
  magazine = magazine.split('');
  let book = {};
  magazine.map(char => {
    book[char] = book[char] ? book[char] + 1 : 1;
  });
  for (let i = 0; i < ransomNote.length; i++) {
    if (book[ransomNote[i]]) {
      book[ransomNote[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
