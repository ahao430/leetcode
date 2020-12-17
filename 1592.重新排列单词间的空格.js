/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  // 获取单词和空格数
  let words = []
  let spaceCount = 0
  let i = 0
  while (i < text.length) {
    if (text[i] === ' ') {
      spaceCount++
      i++
      continue
    }

    let j = i
    while (j < text.length) {
      if (text[j] === ' ') {
        spaceCount++
        break
      }
      j++
    }
    words.push(text.slice(i, j))
    i = j + 1
  }
  // 计算最大空格间距
  if (words.length === 0) {
    return text
  } else if (words.length === 1) {
    let tail = ''
    while (spaceCount) {
      tail += ' '
      spaceCount--
    }
    return words[0] + tail
  } else {
    const num = words.length - 1
    let tailCount = spaceCount % num
    let len = Math.floor(spaceCount / num)
    let joiner = ''
    while (len) {
      joiner += ' '
      len--
    }
    let tail = ''
    while (tailCount) {
      tail += ' '
      tailCount--
    }
    // 拼接
    return words.join(joiner) + tail
  }
};
// @lc code=end

