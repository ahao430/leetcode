/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length < 3) return NaN;

  let m1 = null;
  let m2 = null;
  let m3 = null;
  let mm1 = null;
  let mm2 = null;
  let mm3 = null;
  nums.forEach(num => {
    if (num > 0) {
      if (m1 == null || num > m1) {
        m3 = m2;
        m2 = m1;
        m1 = num;
      } else if (m2 == null || num > m2) {
        m3 = m2;
        m2 = num;
      } else if (m3 == null || num > m3) {
        m3 = num;
      }
    } else if (num < 0) {
      if (mm1 == null || num < mm1) {
        mm3 = mm2;
        mm2 = mm1;
        mm1 = num;
      } else if (mm2 == null || num < mm2) {
        mm3 = mm2;
        mm2 = num;
      } else if (mm3 == null || num < mm3) {
        mm3 = num;
      }
    }
  });

  if (mm1 !== null && mm2 !== null) {
    if (m1 !== null && m2 !== null && m3 != null) {
      return Math.max(m1 * m2 * m3, m1 * mm1 * mm2);
    } else if (m1 == null) {
      if (mm3 == null) {
        return 0;
      } else {
        return mm1 * mm2 * mm3;
      }
    } else {
      return m1 * mm1 * mm2;
    }
  } else {
    if (m1 != null && m2 != null && m3 != null) {
      return m1 * m2 * m3;
    } else {
      return 0;
    }
  }
};
