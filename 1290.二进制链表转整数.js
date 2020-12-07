/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
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
 * @return {number}
 */
var getDecimalValue = function(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  const len = arr.length
  let res = 0
  for (let i = 0; i < len; i++) {
    if (arr[i]) {
      res += 2 ** (len - i - 1)
    }
  }
  return res
};
// @lc code=end

