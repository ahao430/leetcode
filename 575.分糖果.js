/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let kinds = new Set(candies).size;
  let half = candies.length / 2;
  return Math.min(kinds, half);
};
