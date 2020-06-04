/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let arr = [];
  let left = 0;
  let li;
  let right = 0;
  let ri;
  let flag = 'left';
  for (let i = 0; i < height.length; i++) {
    if (flag === 'left') {
      if (height[i] >= left) {
        left = height[i];
        li = i;
      } else {
        flag = 'right';
      }
    } else if (flag === 'right') {
      if (height[i] >= right) {
        right = height[i];
        ri = i;
      } else {
        arr.push([li, ri]);
        left = right;
        flag = 'left';
        li = i - 1;
        right = 0;
      }
    }
  }
  if (flag === 'right') {
    arr.push([li, ri]);
  }
  console.log(arr);
  // 处理相邻水坑是否合并
  let holes = arr.map(item => {
    return [height[item[0]], height[item[1]]];
  });
  console.log(holes);

  let res = 0;
  arr.forEach(item => {
    res += getWater(item[0], item[1]);
  });
  return res;

  function getWater (start, end) {
    console.log(start, end);
    let d = Math.min(height[start], height[end]);
    let sum = 0;
    for (let i = start + 1; i < end; i++) {
      if (height[i] < d) {
        sum += d - height[i];
      }
    }
    return sum;
  }
};
