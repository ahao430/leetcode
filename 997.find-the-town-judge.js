/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  if (N === 1 && trust.length === 0) return 1;

  let arr = [];
  for (let i = 0; i < trust.length; i++) {
    let item = trust[i];
    if (arr[item[0]] == null) {
      arr[item[0]] = {
        trust: 0,
        trusted: 0,
      };
    }
    if (arr[item[1]] == null) {
      arr[item[1]] = {
        trust: 0,
        trusted: 0,
      };
    }
    arr[item[0]].trust++;
    arr[item[1]].trusted++;
  }
  for (let i = 1; i < arr.length + 1; i++) {
    if (arr[i] && arr[i].trust === 0 && arr[i].trusted === N - 1) return i;
  }
  return -1;
};
