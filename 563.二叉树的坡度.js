/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  let sum = 0;
  dfs(root);
  return sum;

  function dfs (node) {
    if (node) {
      let l = dfs(node.left);
      let r = dfs(node.right);
      let delta = Math.abs(l - r);
      sum += delta;
      return l + r + node.val;
    } else return 0;
  }
};
