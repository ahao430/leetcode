/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (head == null || head.next == null) return head

  let h1 = null
  let t1 = null
  let h2 = null
  let t2 = null
  while (head) {
    if (head.val < x) {
      if (h1 == null) {
        h1 = head
        t1 = h1
      } else {
        t1.next = head
        t1 = head
      }
    } else {
      if (h2 == null) {
        h2 = head
        t2 = h2
      } else {
        t2.next = head
        t2 = head
      }
    }
    head = head.next
  }
  if (t1) {
    t1.next = null
  }
  if (t2) {
    t2.next = null
  }

  if (h1) {
    t1.next = h2
    return h1
  } else {
    return h2
  }
};
// @lc code=end

