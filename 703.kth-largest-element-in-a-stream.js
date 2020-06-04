/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.data = [];
  this.max = [];
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.max.length < this.k) {
    let l = this.max.length;
    if (l === 0 || val <= this.max[this.max.length - 1]) {
      this.max.push(val);
    } else {
      for (let i = l - 1; i > -1; i--) {
        if (val > this.max[i]) {
          this.max[i + 1] = this.max[i];
          this.max[i] = val;
        } else {
          break;
        }
      }
    }
  } else if (val > this.max[this.k - 1]) {
    for (let i = this.k - 1; i > -1; i--) {
      if (val > this.max[i]) {
        this.max[i + 1] = this.max[i];
        this.max[i] = val;
      } else {
        break;
      }
    }
    if (this.max.length > this.k) {
      this.max.pop();
    }
  }

  return this.max[this.max.length - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
