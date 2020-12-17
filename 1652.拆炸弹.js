/*
 * @lc app=leetcode.cn id=1652 lang=javascript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const len = code.length
  return code.map((num,i) => {
    if (k > 0) {
      let sum = 0
      let j = k
      while (j > 0) {
        sum += code[(i + j) % len]
        j--
      }
      return sum
    } else if (k < 0) {
      let j = k
      let sum = 0
      while (j < 0) {
        sum += code[((i + j) % len + len) % len]
        j++
      }
      return sum
    } else {
      return 0
    }
  })
};
// @lc code=end

