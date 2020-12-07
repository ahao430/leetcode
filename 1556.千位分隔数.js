/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  // if (n === 0) return '0'

  // let arr = []
  // while (n) {
  //   if (n < 1000) {
  //     arr.unshift(n)
  //     n = 0
  //   } else {
  //     let tail = n % 1000
  //     arr.unshift(format(tail))
  //     n = Math.floor(n / 1000)
  //   }
  // }
  // return arr.join('.')

  // function format(n) {
  //   if (n < 10) return '00' + n
  //   if (n < 100) return '0' + n
  //   return '' + n
  // }

  var pattern = /(?=(?!\b)(\d{3})+$)/g
    return n.toString().replace(pattern, '.');
};
// @lc code=end

