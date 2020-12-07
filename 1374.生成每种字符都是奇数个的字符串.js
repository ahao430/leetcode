/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  if (n % 2 === 0) {
    return repeat('a', n - 1) + 'b'
  } else {
    return repeat('a', n)
  }

  function repeat(str, n) {
    let res = ''
    while (n) {
      res += str
      n--
    }
    return res
  }
};
// @lc code=end

