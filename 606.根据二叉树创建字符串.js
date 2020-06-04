/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  let res = '';
  dfs(t);
  return res;

  function dfs (node) {
    if (node) {
      res += node.val;
      if (node.left || node.right) {
        res += '(';
        dfs(node.left);
        res += ')';
        if (node.right) {
          res += '(';
          dfs(node.right);
          res += ')';
        }
      }
    }
  }
};
