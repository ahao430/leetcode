/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 三角形的最大周长
 */
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  let res = [];
  let last = 0;
  for (let i = 0; i < A.length; i++) {
    let cur = last * 2 + A[i];
    // 减去10的倍数，*2对5取余不影响
    cur = cur % 10;
    last = cur;
    res.push(cur % 5 === 0);
  }
  return res;
};
