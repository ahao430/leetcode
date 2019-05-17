/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let m1;
  let m2;
  let m3;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (m1 == null || cur > m1) {
      m3 = m2;
      m2 = m1;
      m1 = cur;
    } else if (cur !== m1 && (m2 == null || cur > m2)) {
      m3 = m2;
      m2 = cur;
    } else if (cur !== m2 && cur !== m1 && (m3 == null || cur > m3)) {
      m3 = cur;
    }
  }
  return m3 == null ? m1 : m3;
};
