/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {sing} s
 * @return {number}
 */
var calculate = function(s) {
  let arr = [];
  const pattern = /[\+\-\*\/]/
  while (s) {
    const matches = s.match(pattern)
    if (matches) {
      const signal = matches[0]
      const index = matches['index']
      arr.push(Number.parseInt(s.slice(0, index)), signal)
      s = s.slice(index + 1)
    } else {
      arr.push(Number.parseInt(s))
      s = ''
    }
  }
  console.log(arr)

  arr = arr.reduce((a, b) => {
    let last = a[a.length - 1]
    if (last === '*' || last === '/') {
      const signal = a.pop()
      const num1 = a.pop()
      return [...a, signal === '*' ? num1 * b : Math.floor(num1 / b)]
    } else {
      return [...a, b]
    }
  }, [])
  console.log(arr)
  arr = arr.reduce((a, b) => {
    let last = a[a.length - 1]
    if (last === '+' || last === '-') {
      const signal = a.pop()
      const num1 = a.pop()
      return [...a, signal === '+' ? num1 + b : num1 - b]
    } else {
      return [...a, b]
    }
  }, [])

  console.log(arr)
  return arr[0]
};
// @lc code=end

