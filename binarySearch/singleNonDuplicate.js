/**
 * @param {number[]} nums
 * @return {number}
 */

// Space O(1), Time O(log n)

var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let curr = nums[mid];
    let next = nums[mid + 1];
    let prev = nums[mid - 1];

    if ((mid % 2 === 0 && next === curr) || (mid % 2 !== 0 && prev === curr)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 5])); // -> 2
