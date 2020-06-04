/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let res = [];
  ops.forEach(op => {
    switch (op) {
      case '+':
        res.push(res[res.length - 2] + res[res.length - 1]);
        break;
      case 'D':
        res.push(res[res.length - 1] * 2);
        break;
      case 'C':
        res.pop();
        break;
      default:
        res.push(+op);
        break;
    }
  });
  return res.reduce((a, b) => a + b);
};
