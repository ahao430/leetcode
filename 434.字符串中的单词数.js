/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim();
  return s.length === 0 ? 0 : s.split(/\s+/).length;
};
