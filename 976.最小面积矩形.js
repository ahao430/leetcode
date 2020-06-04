/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 最小面积矩形
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort((a, b) => b - a);
  let l = A.length;

  for (let i = 0; i < l - 2; i++) {
    if (A[i] < A[i + 1] + A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2];
    }
  }
  return 0;
};
