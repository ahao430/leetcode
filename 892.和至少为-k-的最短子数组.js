/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 和至少为 K 的最短子数组
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  // 不能用投影面积*2，要考虑中间空心部分面积
  // 遍历，每一个面积相加，去掉公共面积
  let res = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      let z = grid[x][y];
      if (z > 0) {
        let s = 2 + z * 4;
        // 向x轴负方向找相邻
        if (x > 0) {
          s -= getCommonS(z, grid[x - 1][y]);
        }
        // 向y轴负方向找相邻
        if (y > 0) {
          s -= getCommonS(z, grid[x][y - 1]);
        }
        res += s;
      }
    }
  }
  return res;

  function getCommonS (z, lastZ) {
    return 2 * Math.min(z, lastZ);
  }
};
