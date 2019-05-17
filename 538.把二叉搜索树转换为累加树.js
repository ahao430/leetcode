/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (root == null) return null;
  let last = 0;
  dfs(root);
  return root;

  function dfs (node) {
    if (node) {
      dfs(node.right);
      node.val = last + node.val;
      last = node.val;
      dfs(node.left);
    }
  }
};
