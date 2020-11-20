/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  return search(root, [])

  function getVal (path = []) {
    // const len = path.length
    // return path.reduceRight((a, b, i) => {
    //   return a + b * Math.pow(2, len - 1 - i)
    // }, 0)
    return Number.parseInt(path.join(''), 2)
  }

  function search (node, path = []) {
    if (node == null) return 0
    let newPath = [...path, node.val]
    if (node.left == null && node.right == null) {
      return getVal(newPath)
    } else {
      return search(node.left, newPath) + search(node.right, newPath)
    }
  }
};
// @lc code=end

