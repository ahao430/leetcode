/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 具有所有最深结点的最小子树
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length < 3) return true;

  let direction = 0;
  let index = 1;
  while (index < A.length) {
    let delta = A[index] - A[index - 1];

    if (delta > 0) {
      if (direction === -1) return false;
      direction = 1;
    } else if (delta < 0) {
      if (direction === 1) return false;
      direction = -1;
    }

    index++;
  }

  return true;
};
