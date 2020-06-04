/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
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
 * @return {number[]}
 */
// 递归
// var postorder = function (root) {
//   let res = [];
//   dfs(root);
//   return res;

//   function dfs (node) {
//     if (node) {
//       node.children.forEach(child => dfs(child));
//       res.push(node.val);
//     }
//   }
// };

// 循环
var postorder = function (root) {
  if (root == null) return [];

  let res = [];
  let stack = [root];
  while (stack.length > 0) {
    root = stack.pop();
    res.unshift(root.val);
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        stack.push(root.children[i]);
      }
    }
  }
  return res;
};
