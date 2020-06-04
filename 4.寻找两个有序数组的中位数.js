/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const l1 = nums1.length;
  const l2 = nums2.length;
  const l = l1 + l2;

  let flag;
  if (l % 2 === 0) {
    flag = l / 2;
  } else {
    flag = (l / 2) << 0;
  }
  let count = 0;
  let index1 = 0;
  let index2 = 0;
  let arr = [];
  while (count <= flag) {
    if (index1 < l1 && index2 < l2) {
      if (nums1[index1] <= nums2[index2]) {
        arr.push(nums1[index1]);
        index1++;
      } else {
        arr.push(nums2[index2]);
        index2++;
      }
    } else if (index1 >= l1) {
      arr.push(nums2[index2]);
      index2++;
    } else {
      arr.push(nums1[index1]);
      index1++;
    }
    count++;
    if (l % 2 === 0) {
      arr = arr.slice(-2);
    } else {
      arr = arr.slice(-1);
    }
  }

  if (l % 2 === 0) {
    return (arr[0] + arr[1]) / 2;
  } else {
    return arr[0];
  }
};
