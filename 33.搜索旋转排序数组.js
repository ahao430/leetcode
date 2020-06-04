/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  return searchInRange(0, nums.length - 1);

  function searchInRange (start, end) {
    let len = end - start + 1;
    let mid = start + Math.floor(len / 2);

    // 二分法
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > nums[start]) {
      // 前面递增
      if (nums[mid] > target && nums[start] <= target) {
        // 二分查找
        let res1 = bisection(start, mid - 1);
        if (res1 > -1) return res1;
      } else {
        let res2 = searchInRange(mid + 1, end);
        if (res2 > -1) return res2;
      }
      return -1;
    } else if (nums[mid] < nums[end]) {
      // 后面递增
      if (nums[mid] < target && nums[end] >= target) {
        // 二分查找
        let res3 = bisection(mid + 1, end);
        if (res3 > -1) return res3;
      } else {
        let res4 = searchInRange(start, mid - 1);
        if (res4 > -1) return res4;
      }
      return -1;
    } else {
      // 只有两位数，mid === end
      if (nums[start] === target) return start;
      if (nums[end] === target) return end;
      return -1;
    }
  }

  function bisection (start, end) {
    while (start <= end) {
      if (start === end) {
        return nums[start] === target ? start : -1;
      } else {
        let len = end - start + 1;
        let mid = start + Math.floor(len / 2);
        if (len === 2) {
          if (nums[start] === target) return start;
          if (nums[end] === target) return end;
          return -1;
        } else {
          if (nums[mid] === target) {
            return mid;
          } else if (nums[mid] > target) {
            end = mid;
          } else {
            start = mid;
          }
        }
      }
    }
    return -1;
  }
};
