/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let book = {}
  arr.forEach(num => {
    if (book[num] == null) {
      book[num] = 1
    } else {
      book[num] ++
    }
  })
  let book2 = {}
  for (let num in book) {
    if (book2[book[num]]) return false
    else book2[book[num]] = true
  }
  return true
};
// @lc code=end

