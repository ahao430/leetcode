/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 最长的斐波那契子序列的长度
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let odds = [];
  let evens = [];
  A.forEach(num => {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });
  return [...evens, ...odds];
};
