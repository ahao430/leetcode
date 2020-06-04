/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 至少是其他数字两倍的最大数
 */
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let map = new Map();
  for (let i = 0; i < licensePlate.length; i++) {
    let char = licensePlate[i];
    if (/^[a-zA-Z]$/.test(char)) {
      char = char.toLowerCase();
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
      } else {
        map.set(char, 1);
      }
    }
  }
  licensePlate.toLowerCase().replace(/[^a-z]/g, '').split('').forEach(char => {
  });
  console.log(map);
  let res = null;
  words.forEach((word, index) => {
    if (isCompletetingWord(word)) {
      console.log(word);
      if (res == null || word.length < res.length) {
        res = word;
      }
    }
  });
  return res;

  function isCompletetingWord (word) {
    let wordMap = new Map(map);
    for (let i = 0; i < word.length; i++) {
      let char = word[i].toLowerCase();
      if (wordMap.has(char)) {
        wordMap.set(char, wordMap.get(char) - 1);
        if (wordMap.get(char) === 0) {
          wordMap.delete(char);
        }
      }
    }
    return wordMap.size === 0;
  }
};
