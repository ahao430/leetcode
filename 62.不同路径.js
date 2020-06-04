/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//   // Am(m+n)
//   return factorial(m - 1 + n - 1) / (factorial(m - 1) * factorial(n - 1))
// };

// function factorial (n) {
//   if (n === 0) return 1

//   let res = 1
//   while (n) {
//     res *= n
//     n--
//   }
//   return res
// }

var uniquePaths = function(m, n) {


  let book = []
  return calc(m, n)

  function calc (m,n) {
    if (book[m] && book[m][n]) return book[m][n]
    else {
      if (m === 1 || n === 1) return 1
      let res = calc(m-1,n) + calc(m, n-1)
      if (!book[m]) book[m] = []
      book[m][n] = res
      return res
    }
  }
};

// @lc code=end

