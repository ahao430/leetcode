/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let i = 0
  let j = 0
  let count = n ** 2
  let num = 1
  let res = []
  let direction = 'right'
  let iMin = 0
  let iMax = n - 1
  let jMin = 0
  let jMax = n - 1
  while (num <= count) {
    switch (direction) {
      case 'right':
        for (;j <= jMax; j++) {
          put(res, i, j, num)
          num++
        }
        j--
        i++
        iMin++
        direction = 'down'
        break
      case 'down':
        for (;i <= iMax; i++) {
          put(res, i, j, num)
          num++
        }
        i--
        j--
        jMax--
        direction = 'left'
        break
      case 'left':
        for (;j >= jMin; j--) {
          put(res, i, j, num)
          num++
        }
        j++
        i--
        iMax--
        direction = 'up'
        break
      case 'up':
        for (;i >= iMin; i--) {
          put(res, i, j, num)
          num++
        }
        i++
        j++
        jMin++
        direction = 'right'
        break
    }
  }
  return res

  function put (arr, x, y, num) {
    if (!arr[x]) {
      arr[x] = []
    }
    arr[x][y] = num
  }
};

// @lc code=end

