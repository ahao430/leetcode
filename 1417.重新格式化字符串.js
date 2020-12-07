/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  const len = s.length
  const half = Math.ceil(len / 2)
  let chars = ''
  let nums = ''
  const numStrs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let i = 0; i < s.length; i++) {
    if (numStrs.includes(s[i])) {
      nums += s[i]
      if (nums.length > half) return ''
    } else {
      chars += s[i]
      if (chars.length > half) return ''
    }
  }
  return merge(chars, nums)

  function merge (str1, str2) {
    if (str1.length < str2.length) return merge(str2, str1)

    let res = ''
    for (let i = 0; i < str1.length; i++) {
      res += str1[i] + (str2[i] || '')
    }
    return res
  }
};
// @lc code=end

