/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let min = 1
  let max = n
  return guessOnce(getMiddle(1, n))

  function getMiddle (a, b) {
    return Number.parseInt((a + b) / 2)
  }

  function guessOnce (n) {
      let res = guess(n)
      if (res === 0) return n
      else if (res === 1) {
        // pick > num
        min = n
        let middle = getMiddle(min, max)
        if (middle === min) return guessOnce(middle + 1)
        return guessOnce(middle)
      } else if (res === -1) {
        // pick < num
        max = n
        let middle = getMiddle(min, max)
        if (middle === max) return guessOnce(middle - 1)
        return guessOnce(getMiddle(min, max))
      }

    }
};
// @lc code=end

