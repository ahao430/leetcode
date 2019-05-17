/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let maxLen = Math.max(len1, len2);
  let res = '';
  let temp = 0;

  for (let i = 0; i < maxLen; i++) {
    let sum = getSum(num1[len1 - 1 - i], num2[len2 - 1 - i]) + temp;
    temp = 0;
    if (sum >= 10) {
      temp = (sum / 10) << 0;
      sum = sum % 10;
    }
    res = sum + res;
  }
  if (temp > 0) {
    res = temp + res;
  }
  return res;

  function getSum (str1, str2) {
    let book = {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
    };
    return (book[str1] || 0) + (book[str2] || 0);
  }
};
