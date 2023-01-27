/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let fistPos = searchFirstPosition(nums, target);
  let lastPos = searchLastPosition(nums, target);

  return [fistPos, lastPos];
};

function searchFirstPosition(nums, target) {
  let idx = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    if (nums[mid] === target) {
      idx = mid;
    }
  }

  return idx;
}

function searchLastPosition(nums, target) {
  let idx = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    if (nums[mid] === target) {
      idx = mid;
    }
  }

  return idx;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([1], 1));
