/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let concValue = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === right) {
      concValue += nums[left];
      break;
    }

    const conc = nums[left] + '' + nums[right];
    concValue += +conc;

    left += 1;
    right -= 1;
  }

  return concValue;
};

console.log(findTheArrayConcVal([5, 14, 13, 8, 12]));
