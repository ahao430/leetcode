/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.01%)
 * Total Accepted:    82.9K
 * Total Submissions: 147.9K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   if (x < 0) return false
//   if (x < 10) return true

//   x = x + ''
//   let head
//   let tail
//   while (x.length > 1) {
//     tail = x[x.length - 1]
//     head = x[0]
//     if (tail !== head) return false
//     x = x.slice(1, -1)
//   }
//   return true
// };

var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true

  let len = (Math.log(x) / Math.log(10)<<0) + 1
  let head
  let tail
  while (len > 1) {
    head = (x / Math.pow(10, len - 1))<<0
    tail = x % 10
    if (head !== tail) return false
    x = (x % Math.pow(10, len - 1) / 10)<<0
    len -= 2
  }

  return true
};
