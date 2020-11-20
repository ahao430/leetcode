/*
 * @lc app=leetcode.cn id=1170 lang=javascript
 *
 * [1170] 比较字符串最小字母出现频次
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  let q = queries.map(item => f(item))
  let w = words.map(item => f(item))
  return q.map(item => w.filter(item2 => item2 > item).length)

  function f (str) {
    let obj = {}
    let min
    for (let i = 0; i < str.length; i++) {
      if (min == null || str[i] < min) {
        min = str[i]
      }
      if (str[i] === min) {
        if (obj[min] == null) {
          obj[min] = 1
        } else {
          obj[min]++
        }
      }
    }
    return obj[min]
  }
};
// @lc code=end

