/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 设计循环双端队列
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;
  if (A === B) {
    let book = {};
    for (let i = 0; i < A.length; i++) {
      if (book[A[i]] == null) {
        book[A[i]] = 1;
      } else {
        return true;
      }
    }
    return false;
  } else {
    let num = 0;
    let arr = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        num++;
        arr.push(i);
      }
    }
    if (arr.length === 2 && A[arr[0]] === B[arr[1]] && A[arr[1]] === B[arr[0]]) {
      return true;
    } else {
      return false;
    }
  }
};
