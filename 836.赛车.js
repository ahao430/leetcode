/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 赛车
 */
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  let [x11, y11, x12, y12] = rec1;
  let [x21, y21, x22, y22] = rec2;
  return join(x11, x12, x21, x22) && join(y11, y12, y21, y22);

  function join (p1, p2, q1, q2) {
    return (p1 <= q1 && q1 <= p2 && p2 !== q1) || (q1 <= p1 && p1 <= q2 && q2 !== p1);
  }
};
