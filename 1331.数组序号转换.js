/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sortArr = [...arr];
    sortArr.sort((a, b) => a - b)
    let map = {}
    let i = 0
    sortArr.forEach((num) => {
      if (map[num] == null) {
        map[num] = i + 1
        i++
      }
    })
    return arr.map(num => map[num])
};
// @lc code=end

