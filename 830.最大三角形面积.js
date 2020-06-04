/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 最大三角形面积
 */
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
  let index = 0;
  let start = 0;
  let res = [];
  while (index < S.length) {
    if (S[index + 1] === S[index]) {
      index++;
    } else {
      if (index - start >= 2) {
        res.push([start, index]);
      }
      index++;
      start = index;
    }
  }
  return res;
};
