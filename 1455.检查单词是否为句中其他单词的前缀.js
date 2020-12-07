/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  let index = 1
  const searchLen = searchWord.length
  let i = 0
  while (i < sentence.length) {
    if (sentence.slice(i, i + searchLen) === searchWord) return index
    let j = i + 1
    while (j < sentence.length && sentence[j] !== ' ') {
      j++
    }
    i = j + 1
    index++
  }
  return -1
};
// @lc code=end

