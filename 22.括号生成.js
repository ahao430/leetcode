/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let book = {}

  let arr = makeParenthesis(n, n)
  arr = arr.filter(item => isValid(item)).map(item => item.join(''))
  return arr

  function makeParenthesis (l, r) {
    if (l === 0 && r === 0) return []
    if (l === 0) {
      let res = []
      while(r--){
        res.push(')')
      }
      return [res]
    }
    if (r === 0) {
      let res = []
      while(l--){
        res.push('(')
      }
      return [res]
    }
    if (book[l + ',' + r]) {
      return book[l + ',' + r]
    }
    let next1 = makeParenthesis(l - 1, r)
    let next2 = makeParenthesis(l, r - 1)
    let res = []
    next1.forEach(item => {
      res.push(['(', ...item])
    })
    next2.forEach(item => {
      res.push([')', ...item])
    })
    book[l + ',' + r] = res
    return res
  }

  function isValid (item) {
    if (item.length === 0) return true
    if (item.length % 2 === 1) return false
    if (item[0] === ')') return false
    let arr = []
    for (let i = 0; i < item.length; i++) {
      if (item[i] === '(') {
        arr.push(item[i])
      } else {
        if (arr.length) {
          arr.pop()
        } else {
          return false
        }
      }
    }
    return arr.length === 0
  }
};
// @lc code=end

