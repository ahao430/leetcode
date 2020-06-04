/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 股票价格跨度
 */
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let arr1 = []; // 字母日志
  let arr2 = []; // 数字日志
  for (let i = 0; i < logs.length; i++) {
    if (getLogType(logs[i]) === 1) {
      arr1.push(logs[i]);
      arr1.sort((a, b) => {
        let index1 = a.indexOf(' ');
        let index2 = b.indexOf(' ');
        let [f1, c1] = [a.slice(0, index1), a.slice(index1)];
        let [f2, c2] = [b.slice(0, index2), b.slice(index2)];
        if (c1 > c2) {
          return 1;
        } else if (c1 < c2) {
          return -1;
        } else {
          if (f1 > f2) {
            return 1;
          } else {
            return -1;
          }
        }
      });
    } else {
      arr2.push(logs[i]);
    }
  }
  return [...arr1, ...arr2];

  function getLogType (log) {
    if (/\d+/.test(log.split(' ')[1])) {
      return 2; // 数字日志
    } else {
      return 1; // 字母日志
    }
  }
};
