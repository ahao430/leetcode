/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 斐波那契数
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  const len = A.length;
  if (len < 3) return false;

  let totalSum = A.reduce((a, b) => a + b);
  if (totalSum % 3 !== 0) return false;

  let sum = totalSum / 3;
  let i = 0;
  let j = len - 1;
  let sumi = sum;
  let sumj = sum;
  while (sumi) {
    sumi -= A[i];
    i++;
  }
  while (sumj) {
    sumj -= A[j];
    j--;
  }
  if (i <= j) {
    let sumk = sum;
    for (let k = i; k <= j; k++) {
      sumk -= A[k];
    }
    return sumk === 0;
  } else {
    return false;
  }
};
