/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 升序，二分法查找
  let index = bisection(0, nums.length - 1);
  if (index === -1) {
    return [-1, -1];
  } else {
    // 向前向后找target边缘
    let start = index;
    let end = index;
    while (start > -1) {
      if (nums[start] === target) {
        start--;
      } else {
        break;
      }
    }
    while (end < nums.length) {
      if (nums[end] === target) {
        end++;
      } else {
        break;
      }
    }
    return [start + 1, end - 1];
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
