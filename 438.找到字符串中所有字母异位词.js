/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let ls = s.length;
  let lp = p.length;
  let res = [];
  let book = {};
  let temp = {};
  if (ls >= lp) {
    for (let i = 0; i < lp; i++) {
      book[p[i]] = book[p[i]] ? book[p[i]] + 1 : 1;
    }
    for (let i = 0; i < ls - lp + 1; i++) {
      if (check(i)) {
        res.push(i);
      }
    }
  }
  return res;

  function check (index) {
    if (index === 0) {
      for (let i = index; i < index + lp; i++) {
        temp[s[i]] = temp[s[i]] ? temp[s[i]] + 1 : 1;
      }
    } else {
      temp[s[index - 1]]--;
      if (temp[s[index - 1]] === 0) delete temp[s[index - 1]];
      let last = index + lp - 1;
      temp[s[last]] = temp[s[last]] ? temp[s[last]] + 1 : 1;
    }
    return equalObj(book, temp);
  }

  function equalObj (obj1, obj2) {
    for (let key in obj1) {
      if (obj2[key] !== obj1[key]) return false;
    }
    return true;
  }
};
