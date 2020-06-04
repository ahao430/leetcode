/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 车队
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  let arr = [];
  grid.forEach(col => {
    let temp = 0;
    col.forEach((cell, index) => {
      // xy
      if (cell > 0) {
        s1++;
      }
      // xz
      if (cell > temp) {
        temp = cell;
      }
      // yz
      if (arr[index] == null) {
        arr[index] = cell;
      } else if (cell > arr[index]) {
        arr[index] = cell;
      }
    });
    s2 += temp;
  });
  s3 = arr.reduce((a, b) => a + b);

  return s1 + s2 + s3;
};
