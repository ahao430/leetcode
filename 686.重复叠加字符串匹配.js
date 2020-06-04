/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  let count = 1;
  let maxL = 2 * A.length + B.length;
  let str = A;

  while (str.length <= maxL) {
    if (str.indexOf(B) > -1) return count;
    else {
      count++;
      str += A;
    }
  }
  return -1;
};
