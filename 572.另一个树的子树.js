/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (t == null) return true;
  if (s == null) return false;

  let flag = false;
  find(s);
  return flag;

  function find (s) {
    if (s) {
      if (s.val === t.val) {
        if (compare(s, t)) {
          flag = true;
        }
      }
      find(s.left);
      find(s.right);
    }
  }

  function compare (a, b) {
    if (a == null && b == null) return true;
    else if (a == null || b == null) return false;
    else if (a.val === b.val) {
      return compare(a.left, b.left) && compare(a.right, b.right);
    } else return false;
  }
};
