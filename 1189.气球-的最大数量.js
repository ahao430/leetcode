/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let book = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  }
  for (let i = 0; i < text.length; i++) {
    if (book[text[i]] != null) {
      book[text[i]]++
    }
  }
  book['ll'] = Math.floor(book['l'] / 2)
  book['oo'] = Math.floor(book['o'] / 2)
  return Math.min(book['b'], book['a'], book['ll'], book['oo'], book['n'])
};
// @lc code=end

