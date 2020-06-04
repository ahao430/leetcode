/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  // 给定的字符串总是由0结束
  if (bits.length === 1) return true;
  if (bits.length === 2) return bits[0] === 0;
  if (bits[0] === 0) return isOneBitCharacter(bits.slice(1));
  else return isOneBitCharacter(bits.slice(2));
};
