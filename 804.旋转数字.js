/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 旋转数字
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let dict = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..'
  };

  let set = new Set();
  let temp = '';
  let word = '';

  for (let i = 0; i < words.length; i++) {
    word = words[i];
    temp = '';
    for (let j = 0; j < word.length; j++) {
      temp += dict[word[j]];
    }
    set.add(temp);
  }

  return set.size;
};
