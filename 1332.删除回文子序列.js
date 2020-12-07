/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  if (s === '') return 0
  if (isPalindrome(s)) return 1
  return 2

  function isPalindrome(str) {
    if (str.length === 1) return true

    let i = 0
    let j = str.length - 1
    while (i < j) {
      if (str[i] === str[j]) {
        i++;
        j--;
      } else {
        return false
      }
    }
    return true
  }
};
// @lc code=end

