/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
  if (head == null || head.next == null) return head

  let last = null
  let node = head
  let node2 = node
  while (node && node.next) {
    while (node2 && node2.next) {
      if (node2.next.val === node2.val) {
        node2 = node2.next
      } else {
        break
      }
    }
    if (node2 === node) {
      last = node
      node = node2.next
      node2 = node2.next
    } else {
      if (last) {
        node = node2.next
        last.next = node2.next
        node2 = node2.next
      } else {
        head = node2.next
        node = node2.next
        node2 = node2.next
      }
    }
  }
  return head
};
// @lc code=end

