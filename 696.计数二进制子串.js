/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let count = 0;
  let l0 = 0;
  let l1 = 0;
  let index = 0;
  while (index < s.length) {
    for (let i = index + 1; i <= s.length; i++) {
      if (s[i] !== s[index]) {
        if (s[index] === '0') {
          l0 = i - index;
        } else if (s[index] === '1') {
          l1 = i - index;
        }
        index = i;
        checkCount(l0, l1);
        break;
      }
    }
  }
  return count;

  function checkCount (l0, l1) {
    if (l0 === 0 || l1 === 0) return false;
    count += Math.min(l0, l1);
  }
};
