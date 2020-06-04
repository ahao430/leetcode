/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 独特的电子邮件地址
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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (root == null) return false;
  let val = root.val;
  return dfs(root);

  function dfs (node) {
    if (node) {
      return node.val === val && dfs(node.left) && dfs(node.right);
    } else return true;
  }
};
