/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let i = 1
  while (i < S.length) {
    if (S[i - 1] == S[i]) {
      S = S.slice(0, i - 1) + S.slice(i + 1)
      i -= 2
    }
    i++
  }
  return S
};
// @lc code=end

