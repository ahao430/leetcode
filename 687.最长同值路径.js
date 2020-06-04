/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function (root) {
  if (root == null) return 0;

  let max = 0;
  dfs(root);
  return max - 1;

  function dfs (node) {
    if (node) {
      let l = dfs(node.left);
      let r = dfs(node.right);
      if (node.left && node.left.val === node.val && node.right && node.right.val === node.val) {
        if (l + r + 1 > max) max = l + r + 1;
        return Math.max(l, r) + 1;
      } else if (node.left && node.left.val === node.val) {
        if (l + 1 > max) max = l + 1;
        return l + 1;
      } else if (node.right && node.right.val === node.val) {
        if (r + 1 > max) max = r + 1;
        return r + 1;
      } else {
        if (max < 1) max = 1;
        return 1;
      }
    } else return 0;
  }
};
