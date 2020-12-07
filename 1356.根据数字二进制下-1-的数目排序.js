/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  arr.sort((a, b) => {
    let la = getOne(a)
    let lb = getOne(b)
    if (la > lb) return 1
    else if (la < lb) return -1
    else return a - b
  });
  return arr

  function getOne(num) {
    let res = 0
    while (num) {
      res += num % 2
      num = Math.floor(num / 2)
    }
    return res
  }
};
// @lc code=end

