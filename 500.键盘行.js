/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let groups = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];
  let map = {};
  groups.forEach((group, index) => {
    group.forEach(char => {
      map[char] = index;
      map[char.toUpperCase()] = index;
    });
  });

  return words.filter(word => check(word));

  function check (word) {
    let index;
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        index = map[word[i]];
      } else {
        if (map[word[i]] !== index) return false;
      }
    }
    return true;
  }
};
