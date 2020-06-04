/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  return dfs(root);
  function dfs (node) {
    if (node) {
      if (node.val === val) return node;
      if (node.val < val) return dfs(node.right);
      if (node.val > val) return dfs(node.left);
    } else return null;
  }
};
