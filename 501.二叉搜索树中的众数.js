/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  let cur = 1;
  let max = 0;
  let pre = null;
  let res = [];
  dfs(root);
  return res;

  function dfs (node) {
    if (node != null) {
      dfs(node.left);
      if (pre != null) {
        cur = node.val === pre.val ? cur + 1 : 1;
      }
      if (cur === max) {
        res.push(node.val);
      } else if (cur > max) {
        res = [node.val];
        max = cur;
      }
      pre = node;
      dfs(node.right);
    }
  }
};
