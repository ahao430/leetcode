/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.98%)
 * Total Accepted:    20.5K
 * Total Submissions: 43.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a.length < b.length) [a, b] = [b, a]
  let la = a.length
  let lb = b.length
  let res = ''
  let add = 0
  for (let i = 0; i < la; i++) {
    let temp = (+a[la - 1 - i]) + (+b[lb - 1 - i] || 0) + add
    if (temp > 1) {
      temp = temp - 2
      add = 1
    } else {
      add = 0
    }
    res = temp + res
  }
  if (add) {
    res = add + res
  }
  return res
};

