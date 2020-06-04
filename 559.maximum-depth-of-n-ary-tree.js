/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  let depth = 0;
  dfs(root, 1);
  return depth;

  function dfs (node, n) {
    if (node) {
      if (n > depth) depth = n;
      node.children.map(child => dfs(child, n + 1));
    }
  }
};
