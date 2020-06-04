/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 打砖块
 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let lastIndex;
  let index = S.indexOf(C);
  return S.split('').map((c, i) => {
    if (index === -1) {
      return i - lastIndex;
    } else if (lastIndex == null && i < index) {
      return index - i;
    } else if (i < index) {
      return Math.min(i - lastIndex, index - i);
    } else if (i === index) {
      let newIndex = S.indexOf(C, i);
      if (newIndex === -1) {
        index = -1;
      } else {
        lastIndex = index;
        index = S.indexOf(C, i + 1);
      }
      return 0;
    }
  });
};
