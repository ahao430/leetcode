/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.data = nums;
  this.length = nums.length;
  this.cache = [];
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  const getSum = (cur) => {
    if (cur < 0) return 0;
    if (!this.cache[cur]) {
      this.cache[cur] = cur === 0 ? this.data[0] : getSum(cur - 1) + this.data[cur];
    };
    return this.cache[cur];
  };

  let sumIm = getSum(i - 1);
  let sumJ = getSum(j);

  return sumJ - sumIm;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
