/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  wfs(root, 0);
  return res;

  function wfs (node, index) {
    if (node) {
      if (res[index] == null) res[index] = [];
      res[index].push(node.val);
      node.children.forEach(child => {
        wfs(child, index + 1);
      });
    }
  }
};
