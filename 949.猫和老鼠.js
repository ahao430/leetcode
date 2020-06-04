/*
 * @lc app=leetcode.cn id=949 lang=javascript
 *
 * [949] 猫和老鼠
 */
/**
 * @param {number[]} A
 * @return {string}
 */

var largestTimeFromDigits = function (A) {
  let max = null;
  let times = getArr(A).filter(time => {
    if (time[0] > 2) return false;
    if (time[0] === 2 && time[1] > 3) return false;
    if (time[2] > 5) return false;
    if (max == null || time.join('') > max.join('')) {
      max = time;
    }
    return true;
  });
  return max ? `${max[0]}${max[1]}:${max[2]}${max[3]}` : '';

  function getArr (arr) {
    if (arr.length === 1) return [arr];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      getArr([...arr.slice(0, i), ...arr.slice(i + 1)]).forEach(item => {
        res.push([arr[i], ...item]);
      });
    }
    return res;
  }
};
