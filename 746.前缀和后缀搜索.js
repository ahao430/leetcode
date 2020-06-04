/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 前缀和后缀搜索
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let book = {};
  let len = cost.length;
  return Math.min(getCost(0), getCost(1));

  function getCost (start) {
    if (start === len - 2 || start === len - 1) return cost[start];

    if (book[start] == null) {
      let res = Math.min(cost[start] + getCost(start + 1), cost[start] + getCost(start + 2));
      book[start] = res;
      return res;
    } else {
      return book[start];
    }
  }
};
