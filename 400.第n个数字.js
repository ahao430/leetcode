/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n < 10) return n;
  let len = (n + '').length;
  let count = 0;
  let res;

  for (let i = 1; i <= len; i++) {
    let newCount = count + (10 ** (i - 1)) * 9 * i;
    if (newCount >= n) {
      let delta = n - count;
      // 上一位所有数字长度
      console.log('count:' + count);
      // 剩余长度
      console.log('delta:' + delta);
      // 剩余数字
      let addNum = Math.floor(delta / i);
      console.log('addNum:' + addNum);
      // 位数
      let digit = delta % i;
      if (digit === 0) {
        digit = i - 1;
      } else {
        addNum++;
        digit--;
      }
      console.log('digit:' + digit);
      // 下一个数字
      let resNum = 10 ** (i - 1) - 1 + addNum;
      console.log('Num:' + resNum);
      res = (resNum + '')[digit];
      return res;
    } else {
      count = newCount;
    }
  }
};
