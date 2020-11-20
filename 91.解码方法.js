/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let book = {}
  return search(0)

  function search (i) {
    console.log(i)
    if (book[i]) return book[i]
    if (i > s.length - 1) return []
    if (i === s.length - 1) return [getChar(s[i])]
    let res = []
    search(i + 1).forEach(item => {
      res.push(getChar(s[i]) + item)
    })
    search(i + 2).forEach(item => {
      res.push(getChar(s[i] + s[i + 1]) + item)
    })
    book[i] = res
    return res
  }
  function getChar (num) {
    return String.fromCharCode(64 + (+num))
  }
};
// @lc code=end

