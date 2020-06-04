/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  return render(digits);

  function render (str) {
    let arr = [];
    if (str.length === 0) {
      arr = [];
    } else if (str.length === 1) {
      arr = dict[str];
    } else {
      dict[str[0]].forEach(char => {
        render(str.slice(1)).forEach(nstr => {
          arr.push(char + nstr);
        });
      });
    }
    return arr;
  }
};
