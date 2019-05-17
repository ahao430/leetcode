/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  if (root == null) return 0;

  let max = 0;
  getMax(root);
  return max - 1;

  function getMax (node) {
    if (node) {
      let maxL = getMax(node.left);
      let maxR = getMax(node.right);
      if (maxL + maxR + 1 > max) max = maxL + maxR + 1;
      node.max = Math.max(maxL, maxR);
      return node.max + 1;
    } else return 0;
  }
};
