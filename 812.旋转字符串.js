/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 旋转字符串
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let max = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        let size = getSize(i, j, k);
        if (size > max) max = size;
      }
    }
  }
  return max;

  function getSize (i, j, k) {
    let [xi, yi] = points[i];
    let [xj, yj] = points[j];
    let [xk, yk] = points[k];

    return Math.abs(xi * yj - xj * yi + xj * yk - xk * yj + xk * yi - xi * yk) / 2;
  }
};
