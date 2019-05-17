/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // let str1 = '';
  // let str2 = '';
  // while (head) {
  //   str1 += head.val;
  //   str2 = head.val + str2;
  //   head = head.next;
  // }
  // return str1 === str2;

  // 要求空间复杂度O（1）
  // 快慢指针找中点, 后半部分逆序，遍历比较
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : fast.next;
  }
  slow = reverse(slow);
  while (slow) {
    if (head.val !== slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

function reverse (head) {
  let res = null;
  while (head) {
    let node = new ListNode(head.val);
    node.next = res;
    res = node;
    head = head.next;
  }
  return res;
}
