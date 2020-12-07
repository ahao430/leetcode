/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let i = 0
  let res = ''
  const map = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
    '10#': 'j',
    '11#': 'k',
    '12#': 'l',
    '13#': 'm',
    '14#': 'n',
    '15#': 'o',
    '16#': 'p',
    '17#': 'q',
    '18#': 'r',
    '19#': 's',
    '20#': 't',
    '21#': 'u',
    '22#': 'v',
    '23#': 'w',
    '24#': 'x',
    '25#': 'y',
    '26#': 'z',
  }
  while (i < s.length) {
    if (s[i + 1] && s[i + 2] && map[s[i] + s[i + 1] + s[i + 2]]) {
      res += map[s[i] + s[i + 1] + s[i + 2]]
      i += 3
    } else {
      res += map[s[i]]
      i++
    }
  }
  return res
};
// @lc code=end

