// Time Complexity O(n)
// Using hashmap for O(1) access

function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let nums = nums[i];
    let possibleResult = target - num;

    if (map[possibleResult] !== undefined) {
      return [map[possibleResult], i];
    } else {
      map[num] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
