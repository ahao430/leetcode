/*
 * @lc app=leetcode.cn id=1389 lang=javascript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let res = []
  // 按更新索引
  for (let i = 0; i < index.length; i++) {
    for (let j = 0; j < i; j++) {
      if (index[j] >= index[i]) index[j]++
    }
  }
  // 填充数据
  for (let i = 0; i < index.length; i++) {
    res[index[i]] = nums[i]
  }
  return res
};
// @lc code=end

