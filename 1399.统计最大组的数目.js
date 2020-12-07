/*
 * @lc app=leetcode.cn id=1399 lang=javascript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let max = 0
  let maxCount = 0
  const map = {}
  while (n) {
    let sum = getDigitSum(n)
    if (map[sum] == null) map[sum] = 0
    map[sum] ++
    n--
    if (max < map[sum]) {
      max = map[sum]
      maxCount = 1
    } else if (max === map[sum]) {
      maxCount++
    }
  }
  return maxCount

  function getDigitSum(n) {
    let res = 0
    while (n) {
      res += n % 10
      n = Math.floor(n / 10)
    }
    return res
  }
};
// @lc code=end

