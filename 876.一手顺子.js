/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 一手顺子
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (head.next == null) return head;

  let slow = head;
  let fast = head;
  while (true) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
    if (fast == null || fast.next == null) return slow;
  }
};
