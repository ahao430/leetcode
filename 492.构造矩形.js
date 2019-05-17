/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let l = area;
  let w = 1;
  let res = [l, w];
  while (w ** 2 <= area) {
    w++;
    if (area % w === 0) {
      l = area / w;
      if (l >= w) {
        res = [l, w];
      }
    };
  }
  return res;
};
