/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let join = {};
  let book = {};
  let directions = ['up', 'right', 'down', 'left'];
  let val = image[sr][sc];

  dfs(sr, sc);

  for (let r = 0; r < image.length; r++) {
    for (let c = 0; c < image[0].length; c++) {
      if (image[r][c] === val) {
        if (join[`${r},${c}`]) {
          image[r][c] = newColor;
        }
      }
    }
  }

  function dfs (r, c) {
    book[`${r},${c}`] = 1;
    if (image[r][c] === val) {
      join[`${r},${c}`] = 1;
    }
    directions.forEach(direction => {
      switch (direction) {
        case 'up':
          if (r > 0 && image[r - 1][c] === val) {
            if (!book[`${r - 1},${c}`]) {
              dfs(r - 1, c);
            }
          }
          break;
        case 'down':
          if (r < image.length - 1 && image[r + 1][c] === val) {
            if (!book[`${r + 1},${c}`]) {
              dfs(r + 1, c);
            }
          }
          break;
        case 'left':
          if (c > 0 && image[r][c - 1] === val) {
            if (!book[`${r},${c - 1}`]) {
              dfs(r, c - 1);
            }
          }
          break;
        case 'right':
          if (c < image[r].length - 1 && image[r][c + 1] === val) {
            if (!book[`${r},${c + 1}`]) {
              dfs(r, c + 1);
            }
          }
          break;
      }
    });
  }

  return image;
};
