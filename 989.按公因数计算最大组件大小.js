/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 按公因数计算最大组件大小
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  K = getArr(K);
  if (A.length < K.length) {
    [A, K] = [K, A];
  }

  let temp = 0;
  let la = A.length;
  let lk = K.length;
  for (let i = 0; i < A.length; i++) {
    if (temp === 0 && K[lk - 1 - i] == null) break;
    let add = K[lk - 1 - i] || 0;
    A[la - 1 - i] += add + temp;
    temp = 0;
    if (A[la - 1 - i] > 9) {
      A[la - 1 - i] -= 10;
      temp = 1;
    }
  }
  if (temp) {
    A.unshift(temp);
  }
  return A;

  function getArr (num) {
    let res = [];
    while (num) {
      res.unshift(num % 10);
      num = (num / 10) << 0;
    }
    return res;
  }
};
