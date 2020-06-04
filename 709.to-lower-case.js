/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] To Lower Case
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  return str.replace(/[A-Z]/g, char => String.fromCharCode(char.charCodeAt() + 32));
};
