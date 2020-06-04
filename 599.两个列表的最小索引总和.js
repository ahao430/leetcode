/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let res = [];
  let index;
  let book = {};
  let l1 = list1.length;
  let l2 = list2.length;

  for (let i = 0; i < l1; i++) {
    book[list1[i]] = i;
  }
  for (let j = 0; j < l2; j++) {
    if (book[list2[j]] != null) {
      let curIndex = book[list2[j]] + j;
      if (index == null || curIndex < index) {
        res = [list2[j]];
        index = curIndex;
      } else if (curIndex === index) {
        res.push(list2[j]);
      }
    }
  }
  return res;
};
