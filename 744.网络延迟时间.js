/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 网络延迟时间
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  // 有序数组
  // 二分
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (letters[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return letters[start % letters.length];
};
