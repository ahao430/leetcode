/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 适龄的朋友
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  let index;
  let cur = 0;
  let len = A.length;
  while (cur < len - 1) {
    if (A[cur + 1] > A[cur]) {
      if (index != null) {
        return -1;
      } else {
        cur++;
      }
    } else if (A[cur + 1] < A[cur]) {
      if (index == null) {
        index = cur;
      }
      cur++;
    } else {
      return -1;
    }
  }
  if (index != null && index !== 0 && index !== len - 1) {
    return index;
  } else {
    return -1;
  }
};
