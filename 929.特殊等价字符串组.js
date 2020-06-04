/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 特殊等价字符串组
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let arr = emails.map(email => {
    let [name, host] = email.split('@');
    name = name.split('+')[0].replace(/\./g, '');
    return name + '@' + host;
  });
  return new Set(arr).size;
};
