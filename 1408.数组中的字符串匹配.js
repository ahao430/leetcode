/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  let res = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && isSubString(words[i], words[j])) {
        res.push(words[i])
        break
      }
    }
  }
  return res

  function isSubString(str, matchStr) {
    if (str.length >= matchStr.length) return false

    for (let i = 0; i < matchStr.length - str.length + 1; i++) {
      if (str === matchStr.slice(i, i + str.length)) return true
    }

    return false
  }
};
// @lc code=end

