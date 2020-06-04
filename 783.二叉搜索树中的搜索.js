/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树中的搜索
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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let vals = [];
  let min;
  dfs(root);
  vals.reduce((a, b) => {
    if (min == null || b - a < min) min = b - a;
    return b;
  });
  return min;

  function dfs (node) {
    if (node) {
      if (node.left) {
        dfs(node.left);
      }
      vals.push(node.val);
      if (node.right) {
        dfs(node.right);
      }
    }
  }
};
