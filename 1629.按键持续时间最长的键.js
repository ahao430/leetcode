/*
 * @lc app=leetcode.cn id=1629 lang=javascript
 *
 * [1629] 按键持续时间最长的键
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let max = 0
  let maxKey = ''
  for (let i = 0; i < releaseTimes.length; i++) {
    let time
    if (i === 0) {
      time = releaseTimes[i]
    } else {
      time = releaseTimes[i] - releaseTimes[i - 1]
    }
    if (time > max) {
      max = time
      maxKey = keysPressed[i]
    } else if (time === max && keysPressed[i] > maxKey) {
      maxKey = keysPressed[i]
    }
  }
  return maxKey
};
// @lc code=end

