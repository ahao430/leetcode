/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  if (M.length === 0) return [];
  let res = [];
  let rl = M.length;
  let cl = M[0].length;

  for (let i = 0; i < rl; i++) {
    let row = M[i];
    for (let j = 0; j < cl; j++) {
      let p = row[j];
      if (res[i] == null) res[i] = [];
      res[i][j] = getAverage(i, j);
    }
  }
  return res;

  function getAverage (i, j) {
    let sum = 0;
    let num = 0;
    if (i > 0) {
      if (j > 0) {
        sum += M[i - 1][j - 1];
        num++;
      };
      sum += M[i - 1][j];
      num++;
      if (j < cl - 1) {
        sum += M[i - 1][j + 1];
        num++;
      }
    }
    if (j > 0) {
      sum += M[i][j - 1];
      num++;
    }
    sum += M[i][j];
    num++;
    if (j < cl - 1) {
      sum += M[i][j + 1];
      num++;
    }
    if (i < rl - 1) {
      if (j > 0) {
        sum += M[i + 1][j - 1];
        num++;
      }
      sum += M[i + 1][j];
      num++;
      if (j < cl - 1) {
        sum += M[i + 1][j + 1];
        num++;
      }
    }
    return Math.floor(sum / num);
  }
};
