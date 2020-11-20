/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let i = 0;
  const len = arr.length;
  while (i < len - 1) {
    if (arr[i] === 0) {
      insert(i + 1)
      i+=2
    } else {
      i++
    }
  }

  function insert(index) {
    // 后面数字向后移动一位
    for (let i = len - 1; i > index; i--) {
      arr[i] = arr[i - 1]
    }
    // 插入0
    arr[index] = 0
  }
};
// @lc code=end

