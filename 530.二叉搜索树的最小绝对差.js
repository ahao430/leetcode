/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  let res = [];
  let min;
  dfs(root);
  res.reduce((a, b) => {
    if (min == null || b - a < min) min = b - a;
    return b;
  });
  return min;

  function dfs (node) {
    if (node) {
      // bst中序遍历为升序
      dfs(node.left);
      res.push(node.val);
      dfs(node.right);
    }
  }
};
