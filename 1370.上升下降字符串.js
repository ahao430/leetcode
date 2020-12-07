/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == null) {
      map[s[i]] = 0
    }
    map[s[i]]++
  }
  // 转数组
  let arr = []
  for (let key in map) {
    arr.push({
      char: key,
      count: map[key]
    })
  }
  console.log(arr)
  // 排序
  arr.sort((a, b) => a.char < b.char ? -1 : 1)
  console.log(arr)
  // 遍历
  let total = s.length
  let order = 'increase'
  let res = ''
  while (total) {
    if (order === 'increase') {
      let i = 0
      while (i < arr.length) {
        if (arr[i].count) {
          res += arr[i].char
          arr[i].count--
          total--
        }
        if (arr[i].count === 0) {
          arr.splice(i, 1)
        } else {
          i++
        }
      }
      order = 'decrease'
    } else {
      let i = arr.length - 1
      while (i > -1) {
        if (arr[i].count) {
          res += arr[i].char
          arr[i].count--
          total--
        }
        if (arr[i].count === 0) {
          arr.splice(i, 1)
        }
        i--
      }
      order = 'increase'
    }
  }
  return res
};
// @lc code=end

