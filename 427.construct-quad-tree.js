/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] Construct Quad Tree
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
// var construct = function (grid) {
//   let val = grid[0][0];
//   let topLeft = [];
//   let topRight = [];
//   let bottomLeft = [];
//   let bottomRight = [];
//   let isLeaf = true;
//   let len = grid.length;
//   let half = len / 2;

//   grid.forEach((row, y) => {
//     row.forEach((item, x) => {
//       if (val !== '*' && item !== val) {
//         val = '*';
//         isLeaf = false;
//       }
//       if (y < half) {
//         if (x < half) {
//           if (topLeft[y] == null) topLeft[y] = [];
//           topLeft[y][x] = item;
//         } else {
//           if (topRight[y] == null) topRight[y] = [];
//           topRight[y][x - half] = item;
//         }
//       } else {
//         if (x < half) {
//           if (bottomLeft[y - half] == null) bottomLeft[y - half] = [];
//           bottomLeft[y - half][x] = item;
//         } else {
//           if (bottomRight[y - half] == null) bottomRight[y - half] = [];
//           bottomRight[y - half][x - half] = item;
//         }
//       }
//     });
//   });

//   if (val === '*') {
//     return new Node(val, isLeaf, construct(topLeft), construct(topRight), construct(bottomLeft), construct(bottomRight));
//   } else {
//     return new Node(val, isLeaf);
//   }
// };

var construct = function (grid) {
  return quadTree(grid, 0, 0, grid.length);

  function quadTree (grid, row, col, len) {
    if (len <= 0) return null;
    for (let i = row; i < row + len; i++) {
      for (let j = col; j < col + len; j++) {
        if (grid[i][j] !== grid[row][col]) {
          return new Node(
            false,
            false,
            quadTree(grid, row, col, len / 2),
            quadTree(grid, row, col + len / 2, len / 2),
            quadTree(grid, row + len / 2, col, len / 2),
            quadTree(grid, row + len / 2, col + len / 2, len / 2),
          );
        }
      }
    }
    return new Node(grid[row][col], true);
  }
};
