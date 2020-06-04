/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;
  let len = flowerbed.length;
  while (i < len && n > 0) {
    if (flowerbed[i] === 1) {
      i += 2;
    } else {
      if (i < len - 1 && flowerbed[i + 1] === 1) {
        i += 3;
      } else {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  return n === 0;
};
