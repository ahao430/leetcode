/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
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
// var preorder = function (root) {
//   let res = [];
//   dfs(root);
//   return res;

//   function dfs (node) {
//     if (node) {
//       res.push(node.val);
//       node.children.forEach(child => dfs(child));
//     }
//   }
// };

// 循环
var preorder = function (root) {
  if (root == null) return [];

  let res = [];
  let stack = [root];
  while (stack.length > 0) {
    root = stack.pop();
    res.push(root.val);
    if (root.children) {
      for (let i = root.children.length - 1; i > -1; i--) {
        stack.push(root.children[i]);
      }
    }
  }
  return res;
};
