/*
 * @lc app=leetcode.cn id=970 lang=javascript
 *
 * [970] Powerful Integers
 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  let set = new Set();
  let i = 0;
  let j = 0;
  let arr1 = [];
  let arr2 = [];
  if (x === 1) {
    arr1 = [0];
  } else {
    while (x ** i < bound) {
      arr1.push(i);
      i++;
    }
  }

  if (y === 1) {
    arr2 = [0];
  } else {
    while (y ** j < bound) {
      arr2.push(j);
      j++;
    }
  }
  arr1.forEach(i => {
    arr2.forEach(j => {
      let temp = x ** i + y ** j;
      if (temp <= bound) {
        set.add(temp);
      }
    });
  });
  return [...set].sort((a, b) => a - b);
};
