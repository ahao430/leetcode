/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  return getIpBlock(s, 4)

  function getIpBlock (str, restCount) {
    console.log(str, restCount)
    if (restCount === 1) {
      if (str === '') return []
      else if (str.length === 1) {
        return [str]
      } else if (str[0] !== '0' && +str <= 255) return [str]
      else return []
    }

    const len = str.length
    let res = []
    // 一位
    let one = str[0]
    if (len - 1 <= (restCount - 1) * 3) {
      getIpBlock(str.slice(1), restCount - 1).forEach(item => {
        res.push(`${one}.${item}`)
      })
    }
    if (one !== '0') {
      // 两位
      let two = str.slice(0,2)
      if (len - 2 <= (restCount - 1) * 3) {
        getIpBlock(str.slice(2), restCount - 1).forEach(item => {
          res.push(`${two}.${item}`)
        })
      }
      // 三位
      let three = str.slice(0,3)
      if ((+three <= 255) && len - 3 <= (restCount - 1) * 3) {
        getIpBlock(str.slice(3), restCount - 1).forEach(item => {
          res.push(`${three}.${item}`)
        })
      }
    }

    return res
  }
};
// @lc code=end

