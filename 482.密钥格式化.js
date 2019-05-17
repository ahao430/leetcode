/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  let res = '';
  let count = 0;
  for (let i = S.length - 1; i > -1; i--) {
    let char = S[i];
    if (char !== '-') {
      res = char.toUpperCase() + res;
      count++;
      if (count === K) {
        count = 0;
        res = '-' + res;
      }
    }
  }
  if (res[0] === '-') {
    res = res.substring(1);
  }
  return res;
};
