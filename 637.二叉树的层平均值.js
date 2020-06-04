/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let res = [];
  dfs(root, 0);
  function dfs (node, level) {
    if (node) {
      if (res[level]) {
        res[level][0] += node.val;
        res[level][1]++;
      } else {
        res[level] = [node.val, 1];
      }
      dfs(node.left, level + 1);
      dfs(node.right, level + 1);
    }
  }
  return res.map(v => v[0] / v[1]);
};
