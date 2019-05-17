/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (27.08%)
 * Total Accepted:    15.4K
 * Total Submissions: 56.9K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 *
 * 示例:
 *
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let arr = new Array(n).fill(1);
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      for (let j = 2 * i; j < n; j += i) {
        arr[j] = 0;
      }
    }
  }
  return arr.filter(i => i === 1).length;
};
