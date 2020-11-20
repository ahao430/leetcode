/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const len = gas.length
  let starts = []
  gas.forEach((item,i) => {
    if (item >= cost[i]) {
      starts.push(i)
    }
  })
  if (starts.length === 0) return -1

  for (let j = 0; j < starts.length; j++) {
    if (run(starts[j])) return starts[j]
  }
  return -1

  function run (i) {
    let left = 0
    let count = len
    while (count-- && left >= 0) {
      left = left + gas[i] - cost[i]
      i ++
      if (i === len) i = 0
    }
    return left >= 0
  }
};
// @lc code=end

