/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  if (n === 0) return 0
  if (n < 0) return subtractProductAndSum(-n)

  let product = 1
  let sum = 0
  while (n) {
    let num = n % 10
    if (product > 0) {
      product *= num
    }
    sum += num
    n = Math.floor(n / 10)
  }
  return product - sum
};
// @lc code=end

