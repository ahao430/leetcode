/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let map = {}
  let max = -1
  let i = 0
  let j = s.length - 1
  let beforeStop = false
  let stop = false
  let chance = null
  let count = 0
  while (i < j && !stop) {
    count++
    let ci = s[i]
    let cj = s[j]
    if (map[ci] == null) map[ci] = [null, null]
    if (map[ci][0] == null || map[ci][0] > i) {
      map[ci][0] = i
      check(ci, true)
    } else if (map[ci][1] == null) {
      map[ci][1] = i
      check(ci)
    }

    if (map[cj] == null) map[cj] = [null, null]
    if (map[cj][1] == null || map[cj][1] < j) {
      map[cj][1] = j
      check(cj, true)
    } else if (map[cj][0] == null) {
      map[cj][0] = j
      check(cj)
    }
    i++
    j--
    if (chance != null) {
      chance--
      if (chance === 0) stop = true
    }
  }
  return max

  function check(char, flag) {
    if (map[char][0] != null && map[char][1] != null) {
      let d = map[char][1] - map[char][0] - 1
      if (d > max) {
        max = d
        if (flag && !beforeStop) {
          beforeStop = true
          chance = count - 1
        }
      }
    }
  }
};
// @lc code=end

