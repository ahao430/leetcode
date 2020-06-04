/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let r = m;
  let c = n;
  ops.forEach(op => {
    if (op[0] < r) r = op[0];
    if (op[1] < c) c = op[1];
  });
  return r * c;
};
