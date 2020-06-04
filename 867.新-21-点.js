/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 新21点
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  let res = [];
  A.forEach((row, rIndex) => {
    row.forEach((item, cIndex) => {
      if (res[cIndex] == null) {
        res[cIndex] = [];
      }
      res[cIndex][rIndex] = item;
    });
  });
  return res;
};
