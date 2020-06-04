/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 按奇偶排序数组
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let len = A.length;
  if (len < 3) return false;

  if (A[0] >= A[1]) return false;
  let increase = true;
  for (let i = 1; i < len; i++) {
    if (A[i - 1] === A[i]) return false;
    if (increase) {
      if (A[i - 1] > A[i]) {
        increase = false;
      };
    } else {
      if (A[i - 1] < A[i]) return false;
    }
  }
  return increase === false;
};
