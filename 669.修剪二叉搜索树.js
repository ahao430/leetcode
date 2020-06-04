/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
  return dfs(root);

  function dfs (node) {
    if (node) {
      if (node.val < L) {
        return dfs(node.right);
      } else if (node.val > R) {
        return dfs(node.left);
      } else {
        let item = new TreeNode(node.val);
        item.left = dfs(node.left);
        item.right = dfs(node.right);
        return item;
      }
    } else return null;
  }
};
