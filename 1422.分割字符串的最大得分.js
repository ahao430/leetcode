/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let l0 = 0
  let l1 = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') l0++
    else l1++
  }
  let score0 = 0
  let score1 = l1
  let maxScore = 0
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') {
      score0++
    } else {
      score1--
    }
    let score = score0 + score1
    if (score > maxScore) {
      maxScore = score
    }
  }
  return maxScore
};
// @lc code=end

