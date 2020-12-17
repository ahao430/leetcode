/*
 * @lc app=leetcode.cn id=1646 lang=javascript
 *
 * [1646] 获取生成数组中的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1

  const map = {
    0: 0,
    1: 1,
  }
  let max = 1
  for (let i = 0; i <= n; i++) {
    getN(i)
  }
  return max

  function getN (n) {
    if (map[n] != null) return map[n]

    if (n % 2 === 0) {
      map[n] = getN(n / 2)
    } else {
      map[n] = getN((n - 1) / 2) + getN((n + 1) / 2)
    }

    if (map[n] > max) max = map[n]

    return map[n]
  }
};
// @lc code=end

