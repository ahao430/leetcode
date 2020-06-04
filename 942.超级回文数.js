/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 超级回文数
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  const N = S.length;
  let min = 0;
  let max = N;
  let res = [];

  for (let i = 0; i < N; i++) {
    if (S[i] === 'I') {
      res.push(min++);
    } else {
      res.push(max--);
    }
  }
  res.push(min);
  return res;
};
