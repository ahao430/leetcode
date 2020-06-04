/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let len = candidates.length;
  let book = {};
  sub([], 0, target);
  return res;

  function sub (used, start, target) {
    for (let i = start; i < len; i++) {
      if (i === start) {
        let num = candidates[start];
        if (num < target) {
          let add = num;
          let arr = [num];
          while (add < target) {
            sub([...used, ...arr], i + 1, target - add);
            add += num;
            arr.push(num);
          }
          if (add === target) {
            let item = [...used, ...arr];
            item = item.sort((a, b) => a - b);
            if (!book[item.toString()]) {
              res.push(item);
              book[item.toString()] = 1;
            }
          }
        } else if (num === target) {
          let item = [...used, num];
          item = item.sort((a, b) => a - b);
          if (!book[item.toString()]) {
            res.push(item);
            book[item.toString()] = 1;
          }
        }
      } else {
        sub(used, i, target);
      }
    }
  }
};
