/*
 * @lc app=leetcode.cn id=985 lang=javascript
 *
 * [985] 令牌放置
 */
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  let res = [];
  let sum = 0;
  A.forEach(num => {
    if (num % 2 === 0) sum += num;
  });
  queries.forEach(query => {
    if (A[query[1]] % 2 === 0) sum -= A[query[1]];
    A[query[1]] += query[0];
    if (A[query[1]] % 2 === 0) sum += A[query[1]];
    res.push(sum);
  });
  return res;
};
