/*
 * @lc app=leetcode.cn id=558 lang=javascript
 *
 * [558] Quad Tree Intersection
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function (quadTree1, quadTree2) {
  return join(quadTree1, quadTree2);

  function join (node1, node2) {
    let val = node1.val || node2.val;
    let topLeft = null;
    let topRight = null;
    let bottomLeft = null;
    let bottomRight = null;
    let isLeaf = true;
    if (node1.isLeaf === true && node2.isLeaf === false) {
      if (node1.val === false) {
        topLeft = node2.topLeft;
        topRight = node2.topRight;
        bottomLeft = node2.bottomLeft;
        bottomRight = node2.bottomRight;
        isLeaf = false;
      }
    } else if (node1.isLeaf === false && node2.isLeaf === true) {
      if (node2.val === false) {
        topLeft = node1.topLeft;
        topRight = node1.topRight;
        bottomLeft = node1.bottomLeft;
        bottomRight = node1.bottomRight;
        isLeaf = false;
      }
    } else if (node1.isLeaf === false && node2.isLeaf === false) {
      val = false;
      isLeaf = false;
      topLeft = join(node1.topLeft, node2.topLeft);
      topRight = join(node1.topRight, node2.topRight);
      bottomLeft = join(node1.bottomLeft, node2.bottomLeft);
      bottomRight = join(node1.bottomRight, node2.bottomRight);
      if (topLeft.isLeaf === true && topRight.isLeaf === true && bottomLeft.isLeaf === true && bottomRight.isLeaf === true) {
        if (topLeft.val === topRight.val && topLeft.val === bottomLeft.val && topLeft.val === bottomRight.val) {
          val = topLeft.val;
          isLeaf = true;
          topLeft = null;
          topRight = null;
          bottomLeft = null;
          bottomRight = null;
        }
      }
    }
    return new Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight);
  }
};
