/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split('');
  const isVowel = (char) => {
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U';
  };
  let stack = [];
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (isVowel(s[i]) && isVowel(s[j])) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    } else {
      if (!isVowel(s[i])) i++;
      if (!isVowel(s[j])) j--;
    }
  }

  return s.join('');
};
