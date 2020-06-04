/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 根据前序和后序遍历构造二叉树
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let c1 = 0;
  let c2 = 0;
  while (c1 < name.length || c2 < typed.length) {
    let n = name[c1];
    let t = typed[c2];
    if (n !== t) return false;
    let l1 = 0;
    let l2 = 0;
    while (name[c1] === n) {
      c1++;
      l1++;
    }
    while (typed[c2] === t) {
      c2++;
      l2++;
    }
    if (l1 > l2) return false;
  }
  return true;
};
