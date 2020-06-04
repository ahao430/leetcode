/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let book = {};
  let res = false;
  dfs(root);
  return res;

  function dfs (node) {
    if (node) {
      if (book[node.val] == null) {
        book[k - node.val] = 1;
        dfs(node.left);
        dfs(node.right);
      } else {
        res = true;
      }
    }
  }
};
