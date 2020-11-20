/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const len1 = str1.length
  const len2 = str2.length

  if (len1 > len2) return gcdOfStrings(str2, str1)


  for (let i = len1 - 1; i > -1; i--) {
    let substr = str1.slice(0, i + 1)
    if (isDivisorStr(substr, str1) && isDivisorStr(substr, str2)) return substr
  }
  return ''

  function isDivisorStr(str1, str2) {
    console.log(str1, str2)
    const len1 = str1.length
    const len2 = str2.length
    if (len1 > len2) return false
    if (len1 === len2) return str1 === str2
    if (len2 % len1 !== 0) return false
    let count = len2 / len1
    for (let i = 0; i < count; i++) {
      if (str2.slice(i * len1, (i + 1 ) * len1) !== str1) return false
    }
    return true
  }
};
// @lc code=end

