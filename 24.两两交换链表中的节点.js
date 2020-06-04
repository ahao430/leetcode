/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head == null || head.next == null) return head
  let newHead = head.next
  let last = null
  while(head && head.next) {
    let next = head.next
    if (last) {
      last.next = next
    }
    head.next = next.next
    next.next = head
    last = head
    head = head.next
  }
  return newHead
};
// @lc code=end

