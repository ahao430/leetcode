/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  return check(s, 1);

  function check (str, chance) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str[i] === str[j]) {
        i++;
        j--;
      } else if (chance) {
        return check(str.slice(i + 1, j + 1), 0) || check(str.slice(i, j), 0);
      } else {
        return false;
      }
    }
    return true;
  }
};
