/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 回文素数
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let arr = [];
  dfs(root);
  let cur = null;
  let head = cur;
  arr.forEach((num, index) => {
    if (index === 0) {
      cur = new TreeNode(num);
      head = cur;
    } else {
      cur.right = new TreeNode(num);
      cur = cur.right;
    }
  });
  return head;

  function dfs (node) {
    if (node) {
      dfs(node.left);
      arr.push(node.val);
      dfs(node.right);
    }
  }
};
