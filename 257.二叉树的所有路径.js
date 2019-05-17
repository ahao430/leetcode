/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = [];
  let path = '';
  dfs(root, path);
  return res;
  function dfs (root, path) {
    if (root == null) return path;
    path += root.val;
    if (root.left == null && root.right == null) {
      res.push(path);
      return path;
    }
    path += '->';
    dfs(root.left, path);
    dfs(root.right, path);
  }
};
