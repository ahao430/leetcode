/*
 * @lc app=leetcode.cn id=1603 lang=javascript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.count = {
    1: big,
    2: medium,
    3: small
  }
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  let left = this.count[carType]
  if (left) {
    this.count[carType]--
    return true
  } else return false
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end

