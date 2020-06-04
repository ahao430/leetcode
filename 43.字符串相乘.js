/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  let arr1 = num1.split('');
  let arr2 = num2.split('');
  let sum = '0';
  let l1 = arr1.length;
  let l2 = arr2.length;

  for (let i = l1 - 1; i > -1; i--) {
    for (let j = l2 - 1; j > -1; j--) {
      sum = getSum(sum, multi(arr1[i], arr2[j]) + zero(l1 - i - 1 + l2 - j - 1));
    }
  }

  return sum;

  function getSum (a, b) {
    if (a === '0') return b;
    if (b === '0') return a;
    // 两数相加代码
    let l1 = a.length;
    let l2 = b.length;
    let arr1 = a.split('');
    let arr2 = b.split('');

    if (l1 < l2) return getSum(b, a);

    let temp = 0;
    for (let i = 0; i < l1; i++) {
      if (arr2[l2 - i - 1] || temp) {
        arr1[l1 - i - 1] = (+arr1[l1 - i - 1]) + (+arr2[l2 - i - 1] || 0) + temp;
        if (arr1[l1 - i - 1] > 9) {
          arr1[l1 - i - 1] = arr1[l1 - i - 1] - 10;
          temp = 1;
        } else {
          temp = 0;
        }
      }
    }
    if (temp > 0) {
      arr1.unshift(temp);
    }
    return arr1.join('');
  }

  function multi (a, b) {
    if (a === '0' || b === '0') return 0;
    const dic = {
      '1*1': 1,
      '1*2': 2,
      '2*2': 4,
      '1*3': 3,
      '2*3': 6,
      '3*3': 9,
      '1*4': 4,
      '2*4': 8,
      '3*4': 12,
      '4*4': 16,
      '1*5': 5,
      '2*5': 10,
      '3*5': 15,
      '4*5': 20,
      '5*5': 25,
      '1*6': 6,
      '2*6': 12,
      '3*6': 18,
      '4*6': 24,
      '5*6': 30,
      '6*6': 36,
      '1*7': 7,
      '2*7': 14,
      '3*7': 21,
      '4*7': 28,
      '5*7': 35,
      '6*7': 42,
      '7*7': 49,
      '1*8': 8,
      '2*8': 16,
      '3*8': 24,
      '4*8': 32,
      '5*8': 40,
      '6*8': 48,
      '7*8': 56,
      '8*8': 64,
      '1*9': 9,
      '2*9': 18,
      '3*9': 27,
      '4*9': 36,
      '5*9': 45,
      '6*9': 54,
      '7*9': 63,
      '8*9': 72,
      '9*9': 81,
    };
    if (dic[a + '*' + b]) {
      return dic[a + '*' + b];
    } else {
      return dic[b + '*' + a];
    }
  }

  function zero (n) {
    let res = '';
    while (n--) {
      res += '0';
    }
    return res;
  }
};
// @lc code=end
