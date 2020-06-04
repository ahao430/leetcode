/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 写字符串需要的行数
 */
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  let tail = '';
  return S.split(' ').map((word, index) => {
    tail += 'a';
    switch (word[0]) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        word += 'ma';
        break;
      default:
        word = word.slice(1) + word[0] + 'ma';
    }
    word += tail;
    return word;
  }).join(' ');
};
