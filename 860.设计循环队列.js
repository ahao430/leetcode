/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 设计循环队列
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let book = [0, 0, 0]; // 5,10,15
  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    if (bill === 5) {
      book[0]++;
    } else if (bill === 10) {
      if (book[0] > 0) {
        book[0]--;
        book[1]++;
      } else {
        return false;
      }
    } else if (bill === 20) {
      if (book[1] > 0 && book[0] > 0) {
        book[1]--;
        book[0]--;
        book[2]++;
      } else if (book[0] > 2) {
        book[0] -= 3;
        book[2]++;
      } else {
        return false;
      }
    }
  }
  return true;
};
