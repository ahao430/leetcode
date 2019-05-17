/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 *
 * https://leetcode-cn.com/problems/string-compression/description/
 *
 * algorithms
 * Easy (33.58%)
 * Likes:    39
 * Dislikes: 0
 * Total Accepted:    3.9K
 * Total Submissions: 11.4K
 * Testcase Example:  '["a","a","b","b","c","c","c"]'
 *
 * 给定一组字符，使用原地算法将其压缩。
 *
 * 压缩后的长度必须始终小于或等于原数组长度。
 *
 * 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。
 *
 * 在完成原地修改输入数组后，返回数组的新长度。
 *
 *
 *
 * 进阶：
 * 你能否仅使用O(1) 空间解决问题？
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0;
  while (i < chars.length) {
    let char = chars[i];
    let num = 1;
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[j] === char) {
        num++;
      } else {
        break;
      }
    }
    if (num === 1) {
      i++;
    } else {
      let nums = num.toString().split('');
      let nl = nums.length;
      for (let k = 0; k < nl; k++) {
        chars[i + 1 + k] = nums[k];
      }
      let delta = num - 1 - nl;
      for (let m = i + nl + 1; m < chars.length; m++) {
        chars[m] = chars[m + delta];
      }
      chars.length = chars.length - delta;
      i = i + 1 + nl;
    }
  }
  return chars.length;
};
