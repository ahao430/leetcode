/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let max = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) == null) map.set(nums[i], 1);
    else map.set(nums[i], map.get(nums[i]) + 1);
  }
  for (let key of map.keys()) {
    if (map.has(key) && map.has(key + 1)) {
      max = Math.max(max, map.get(key) + map.get(key + 1));
    }
  };

  return max;
};
