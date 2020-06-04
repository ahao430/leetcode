/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let set = new Set();
  for (let i = 0; i < J.length; i++) {
    set.add(J[i]);
  }
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (set.has(S[i])) {
      count++;
    }
  }
  return count;
};
