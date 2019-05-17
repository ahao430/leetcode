/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let pos = null;
    let flag = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        pos = j;
      } else if (nums1[i] < nums2[j] && pos != null && j > pos) {
        res.push(nums2[j]);
        flag = true;
        break;
      }
    }
    if (flag === false) {
      res.push(-1);
    }
  }
  return res;
};
