/*
 * @lc app=leetcode.cn id=754 lang=javascript
 *
 * [754] 破解保险箱
 */
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  if (target < 0) return reachNumber(-target);
  if (target === 0) return 0;
  if (target === 1) return 1;

  let sum = 0;
  let step = 0;
  while (true) {
    step++;
    sum += step;
    if (sum === target) return step;
    else if (sum > target) {
      if ((sum - target) % 2 === 0) return step;
    }
  }
};
