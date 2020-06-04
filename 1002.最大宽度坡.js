/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 最大宽度坡
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  if (A.length === 0) return [];
  if (A.length === 1) return A;

  let res = [];
  let book = {};
  // 获取A[0]元素个数
  for (let i = 0; i < A[0].length; i++) {
    if (book[A[0][i]] == null) book[A[0][i]] = 0;
    book[A[0][i]]++;
  }
  // 从A[1]开始遍历
  for (let i = 1; i < A.length; i++) {
    let item = A[i];
    // 比对book
    for (let key in book) {
      let num = book[key];
      let count = 0;
      let start = -1;
      while (num) {
        let temp = item.indexOf(key, start + 1);
        if (temp > -1) {
          start = temp;
          num--;
          count++;
        } else {
          break;
        }
      }
      if (count > 0) {
        book[key] = count;
      } else {
        delete book[key];
      }
    }
  }
  // book转化为res
  for (let key in book) {
    while (book[key]--) {
      res.push(key);
    }
  }
  return res;
};
