/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 二叉树剪枝
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  return A.map(row => {
    let r = [];
    for (let i = row.length - 1; i > -1; i--) {
      r.push(row[i] === 1 ? 0 : 1);
    }
    return r;
  });
};
