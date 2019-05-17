/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词模式
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let map1 = {};
  let map2 = {};
  let arr1 = pattern.split('');
  let arr2 = str.split(' ');

  let len = arr1.length;
  if (len !== arr2.length) return false;
  for (let i = 0; i < len; i++) {
    let item1 = arr1[i];
    let item2 = arr2[i];
    if (map1[item1] != null && map2[item2] != null) {
      if (map1[item1] !== item2) return false;
      if (map2[item2] !== item1) return false;
    } else if (map1[item1] == null && map2[item2] == null) {
      map1[item1] = item2;
      map2[item2] = item1;
    } else {
      return false;
    }
  }
  return true;
};
