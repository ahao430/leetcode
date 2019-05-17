/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let len = points.length;
  let res = 0;
  let book = {};

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j) {
        let distance = calc(points[i], points[j]);
        if (book[distance]) {
          res += book[distance] * 2;
          book[distance] += 1;
        } else {
          book[distance] = 1;
        }
      }
    }
    book = {};
  }
  return res;

  function calc (a, b) {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
  }
};
