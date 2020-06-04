/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function (root) {
  if (root == null) return -1;

  let min = root.val;
  let min2;
  dfs(root);
  if (min2 == null) {
    return -1;
  } else {
    return min2;
  }

  function dfs (node) {
    if (node) {
      if (node.val > min) {
        if (min2 == null || node.val < min2) {
          min2 = node.val;
        }
      }
      dfs(node.left);
      dfs(node.right);
    }
  }
};
