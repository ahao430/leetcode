/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let arr = text.split(' ')
  let res = []
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === first && arr[i + 1] === second) {
      res.push(arr[i + 2])
    }
  }
  return res
};
// @lc code=end

