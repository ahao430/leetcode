/*
 * @lc app=leetcode.cn id=893 lang=javascript
 *
 * [893] 二叉树中所有距离为 K 的结点
 */
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  let book = {};
  let count = 0;
  A.forEach(str => {
    let key;
    let s1 = [];
    let s2 = [];
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        s1.push(str[i]);
      } else {
        s2.push(str[i]);
      }
    }
    s1.sort();
    s2.sort();
    key = s1.join('') + s2.join('');
    if (book[key] == null) {
      book[key] = 1;
      count++;
    }
  });
  return count;
};
