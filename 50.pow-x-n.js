/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (x === 0) return 0
  if (n < 0) return 1 / myPow(x, -n)
  if (n === 0) return 1
  if (n === 1) return x
  if (n === 2) return x * x
  if (n === 3) return x * x * x
  let arr = []
  while (n > 1) {
    if (n % 2 === 0) {
      arr.push(0)
      n /= 2
    } else {
      arr.push(1)
      n = (n - 1) / 2
    }
  }
  console.log(arr)
  let res = x
  while (arr.length) {
    let a = arr.pop()
    res *= res
    if (a) {
      res *= x
    }
  }
  return res
};
// @lc code=end

