/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (53.11%)
 * Total Accepted:    56.8K
 * Total Submissions: 105.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1
  
  let vals = []
  while (l1) {
    vals.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    vals.push(l2.val)
    l2 = l2.next
  }

  vals = vals.sort((a, b) => a - b)

  return array2List(vals)
};

function array2List(arr) {
  if (arr.length === 0) return null
  
  let res = new ListNode(arr[0])
  let cur = res

  for (let i = 1, l = arr.length; i < l; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return res
}
