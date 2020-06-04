/*
 * @lc app=leetcode.cn id=849 lang=javascript
 *
 * [849] Maximize Distance to Closest Person
 */
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let max = 0;
  let lastIndex = -1;
  let index = seats.indexOf(1);
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      let delta = 0;
      if (index === -1) {
        delta = i - lastIndex;
      } else if (lastIndex === -1) {
        delta = index - i;
      } else {
        delta = Math.min(i - lastIndex, index - i);
      }
      if (delta > max) {
        max = delta;
      }
    } else {
      lastIndex = index;
      index = seats.indexOf(1, i + 1);
    }
  }
  return max;
};
