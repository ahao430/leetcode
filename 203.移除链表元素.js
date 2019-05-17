/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (40.28%)
 * Total Accepted:    21.3K
 * Total Submissions: 52.9K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 *
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 *
 *
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head == null) return null;
  if (head.val === val) {
    head = head.next;
    return removeElements(head, val);
  }
  let prev = head;
  let cur = head.next;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
};
