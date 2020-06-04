/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] N 天后的牢房
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let time = 0;
  let res = 0; // 剩余数

  init();
  if (res === 0) return 0;

  grow();
  return res === 0 ? time : -1;

  function init () {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        let item = grid[i][j];
        if (item === 1) {
          res++;
        }
      }
    }
  }

  function grow () {
    let arr = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        let item = grid[i][j];
        if (item === 2) {
          // 四个方向查找
          if (i > 0) {
            if (grid[i - 1][j] === 1) {
              res--;
              grid[i - 1][j] = 1.5;
              arr.push([i - 1, j]);
            }
          }
          if (i < grid.length - 1) {
            if (grid[i + 1][j] === 1) {
              res--;
              grid[i + 1][j] = 1.5;
              arr.push([i + 1, j]);
            }
          }
          if (j > 0) {
            if (grid[i][j - 1] === 1) {
              res--;
              grid[i][j - 1] = 1.5;
              arr.push([i, j - 1]);
            }
          }
          if (j < grid[i].length - 1) {
            if (grid[i][j + 1] === 1) {
              res--;
              grid[i][j + 1] = 1.5;
              arr.push([i, j + 1]);
            }
          }
        }
      }
    }

    if (arr.length > 0) {
      arr.forEach(p => {
        grid[p[0]][p[1]] = 2;
      });
      time++;
      grow();
    }
  }
};
