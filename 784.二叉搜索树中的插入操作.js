/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 二叉搜索树中的插入操作
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let res = [S];
  for (let i = 0; i < S.length; i++) {
    if (/[a-zA-Z]/.test(S[i])) {
      let head = S.slice(0, i);
      let mid = S[i];
      if (/[a-z]/.test(S[i])) mid = mid.toUpperCase();
      else mid = mid.toLowerCase();
      let tails = letterCasePermutation(S.slice(i + 1));
      tails.forEach(tail => {
        res.push(head + mid + tail);
      });
    }
  }
  return res;
};
