/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let book = {}
  strs.forEach(str => {
    let key = str.split('').sort().join('')
    if (book[key] == null) {
      book[key] = []
    }
    book[key].push(str)
  })
  return Object.values(book)
};
// @lc code=end

