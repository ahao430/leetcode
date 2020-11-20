/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  if (start > destination) return distanceBetweenBusStops(distance, destination, start)

  let longDistance = distance.concat(distance)
  return Math.min(getDistance(start, destination), getDistance(destination, start + distance.length))

  function getDistance(start, destination) {
    return longDistance.slice(start, destination).reduce((a, b) => a + b)
  }
};
// @lc code=end

