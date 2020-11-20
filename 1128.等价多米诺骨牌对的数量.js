/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let arr = dominoes.map(([a, b]) => {
    if (a > b) return [b, a]
    return [a, b]
  })
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    return a[0] - b[0]
  })
  let res = 0
  let temp = 0
  let i = 0
  while (i < arr.length - 1) {
    if (arr[i][0] === arr[i + 1][0] && arr[i][1] === arr[i + 1][1]) {
      temp++
    } else {
      if (temp) {
        res += c(temp + 1)
        temp = 0
      }
    }
    i++
  }
  if (temp) {
    res += c(temp + 1)
    temp = 0
  }
  return res

  function c (num) {
    return num * (num - 1) / 2
  }
};
// @lc code=end

