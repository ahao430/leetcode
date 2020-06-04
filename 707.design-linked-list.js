/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] Design Linked List
 */
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

function Node (val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.index < 0 || this.index >= this.length) {
    return -1;
  } else {
    let cur = this.head;
    while (index-- && cur) {
      cur = cur.next;
    }
    return cur == null ? -1 : cur.val;
  }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  console.log('addHead:' + val);
  let node = new Node(val);
  if (this.length === 0) {
    this.head = this.tail = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  console.log('addTail:' + val);
  let node = new Node(val);
  if (this.length === 0) {
    this.head = this.tail = node;
  } else {
    console.log(this);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  console.log('addAtIndex(' + index + '):' + val);
  if (index <= 0) {
    this.addAtHead(val);
  } else if (index < this.length) {
    let node = new Node(val);
    let cur = this.head;
    while (index--) {
      cur = cur.next;
    }
    node.next = cur;
    node.prev = cur.prev;
    cur.prev.next = node;
    cur.prev = node;
    this.length++;
  } else if (index === this.length) {
    this.addAtTail(val);
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  console.log('delAtIndex(' + index + ')');
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
  } else if (index > 0 && index < this.length) {
    let cur = this.head;
    while (index--) {
      cur = cur.next;
    }
    if (cur.next == null) {
      cur.prev.next = null;
      this.tail = cur.prev;
    } else {
      cur.next.prev = cur.prev;
      cur.prev.next = cur.next;
    }
    this.length--;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
