/**
 * @param {number[]} nums
 */

var Solution = function (nums) {
  this.nums = nums;
};

Solution.prototype.reset = function () {
  return this.nums;
};

// Fisher-Yates shuffling algorithm
Solution.prototype.shuffle = function () {
  const arr = [...this.nums];

  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    let idx = i + Math.floor(Math.random() * arr.length - i);

    arr[i] = arr[idx];
    arr[idx] = temp;
  }
  return arr;
};
