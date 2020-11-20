/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  return search(root)

  function search (root) {
    if (root == null) return 0

    if (root.val < low) {
      return search(root.right)
    } else if (root.val > high) {
      return search(root.left)
    } else {
      return root.val + search(root.left) + search(root.right)
    }
  }
};
// @lc code=end

