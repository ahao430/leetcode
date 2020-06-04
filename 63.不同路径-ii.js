/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let book = []
  return dfs(m,n)

  function dfs (m, n) {
    console.log(m,n)
    if (obstacleGrid[m-1][n-1] === 1) return -1

    if (book[m] && book[m][n]) return book[m][n]

    if (m === 1 || n === 1) return 1

    let res = dfs(m-1,n) + dfs(m, n-1)
    if (!book[m]) book[m] = []
    book[m][n] = res
    return res
  }
};

// @lc code=end

