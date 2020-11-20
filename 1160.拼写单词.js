/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const map = {}
  for (let i = 0; i < chars.length; i++) {
    if (map[chars[i]] == null) {
      map[chars[i]] = 1
    } else {
      map[chars[i]] += 1
    }
  }

  let res = 0
  for (let i = 0; i < words.length; i++) {
    if (inMap(words[i])) {
      res += words[i].length
    }
  }
  return res

  function inMap(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] == null) {
        obj[str[i]] = 1
      } else {
        obj[str[i]] += 1
      }
      if (map[str[i]] == null || map[str[i]] < obj[str[i]]) return false
    }
    return true
  }
};
// @lc code=end

