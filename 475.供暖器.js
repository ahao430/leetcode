/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses = houses.sort((a, b) => a - b);
  heaters = heaters.sort((a, b) => a - b);
  let max = 0;
  let l1 = houses.length;
  let l2 = heaters.length;
  for (let i = 0; i < l1; i++) {
    let house = houses[i];
    let prev;
    let next;
    for (let j = 0; j < l2; j++) {
      let heater = heaters[j];
      if (house < heater) {
        next = heater;
        break;
      } else if (house > heater) {
        prev = heater;
      } else {
        prev = next = heater;
        break;
      }
    }
    if (prev == null && next != null) {
      max = Math.max(max, next - house);
    } else if (prev != null && next == null) {
      max = Math.max(max, house - prev);
    } else if (prev != null && next != null) {
      max = Math.max(max, Math.min(next - house, house - prev));
    }
  }
  return max;
};
