/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 区间子数组个数
 */
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let map = new Map();

  cpdomains.forEach(cpdomain => {
    let [times, domain] = cpdomain.split(' ');
    times = +times;
    let domains = [domain];
    while (domain.indexOf('.') > -1) {
      domain = domain.slice(domain.indexOf('.') + 1);
      domains.push(domain);
    }
    domains.forEach(domain => {
      if (map.has(domain)) map.set(domain, map.get(domain) + times);
      else map.set(domain, times);
    });
  });

  let res = [];
  map.forEach((val, key) => {
    res.push(val + ' ' + key);
  });

  return res;
};
