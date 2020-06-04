/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let len = 1
  let node = head
  while (node && node.next) {
    len++
    node = node.next
  }
  let count = len - n - 1
  let res = head
  if (count < 0) {
    res = head.next
    return res
  } else {
    while (count--) {
      res = res.next
    }
    res.next = res.next.next
    return head
  }
};
// @lc code=end

