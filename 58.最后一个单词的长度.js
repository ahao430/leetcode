/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (28.96%)
 * Total Accepted:    22.2K
 * Total Submissions: 75.8K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // return s.trim().split(' ').pop().length
    let l = s.length
    let count = 0
    for (let i = l - 1; i > -1; i--) {
      if (count) {
        if (s[i] !== ' ') {
          count++
        } else {
          break
        }
      } else {
        if (s[i] !== ' ') {
          count++
        }
      }
    }
    return count
};

