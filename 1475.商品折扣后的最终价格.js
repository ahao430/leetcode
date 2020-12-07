/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let res = []
  for (let i = 0; i < prices.length; i++) {
    let newPrice = prices[i]
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        newPrice = prices[i] - prices[j]
        break
      }
    }
    res.push(newPrice)
  }
  return res
};
// @lc code=end

