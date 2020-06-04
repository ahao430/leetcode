/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 将数组拆分成斐波那契序列
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let leafs1 = getLeafs(root1);
  let leafs2 = getLeafs(root2);

  if (leafs1.length !== leafs2.length) return false;
  for (let i = 0; i < leafs1.length; i++) {
    if (leafs1[i] !== leafs2[i]) return false;
  }
  return true;

  function getLeafs (root) {
    let arr = [];
    dfs(root);
    return arr;

    function dfs (node) {
      if (node) {
        if (node.left == null && node.right == null) {
          arr.push(node.val);
        } else {
          dfs(node.left);
          dfs(node.right);
        }
      }
    }
  }
};
