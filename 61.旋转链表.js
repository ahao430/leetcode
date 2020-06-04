/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head == null) return head

  // 获取长度
  let len = 0
  let temp0 = head
  let tail
  while (temp0) {
    if (temp0.next == null) {
      tail = temp0
    }
    temp0 = temp0.next
    len++
  }
  // 如果k>len
  if (k >= len) {
    k = k % len
  }
  console.log(k, len)
  // len
  if (len === 1) return head
  // k = 0
  if (k === 0) return head
  // 复制head
  let temp = new ListNode(head.val)
  temp.next = head.next

  // 找到head向后k
  let temp2 = head
  let ikp
  let ik
  let ikn
  let count = 0
  while(temp2.next){
    temp2 = temp2.next
    count++
    if (count === k - 1) {
      ikp = temp2
    } else if (count === k) {
      ik = temp2
    } else if (count === k + 1) {
      ikn = temp2
    }
  }
  console.log(ikp,ik,ikn)
  if (ikn) {
    ik.next = null
    tail.next = temp
    return ikn
  } else {
    temp.next = null
    ik.next = temp
    return ik
  }
};
// @lc code=end

