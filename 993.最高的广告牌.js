/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 最高的广告牌
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let dx;
  let dy;
  let px;
  let py;
  dfs(root, 0, null);
  return dx !== null && dy != null && px !== py && dx === dy;

  function dfs (node, depth, parent) {
    if (node) {
      if (node.val === x) {
        dx = depth;
        px = parent;
      } else if (node.val === y) {
        dy = depth;
        py = parent;
      }

      if (dx == null || dy == null) {
        dfs(node.left, depth + 1, node.val);
        dfs(node.right, depth + 1, node.val);
      }
    }
  }
};
