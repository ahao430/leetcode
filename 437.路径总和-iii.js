/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let res = 0;
  dfs(root, sum);
  return res;

  function dfs (node, sum) {
    if (node) {
      run(node, sum);
      dfs(node.left, sum);
      dfs(node.right, sum);
    }
  }
  function run (node, left) {
    if (node) {
      if (node.val === left) {
        console.log(node.val);
        res++;
      }
      run(node.left, left - node.val);
      run(node.right, left - node.val);
    }
  }
};
