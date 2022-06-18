// Time Complexity O(n)
// Space Complexity O(n)

// function majorityElement(nums) {
//   let N = nums.length / 2;
//   let map = {};

//   for (let num of nums) {
//     if (map[num] !== undefined) {
//       map[num] += 1;
//     } else {
//       map[num] = 1;
//     }
//   }

//   for (let num in map) {
//     if (map[num] > N) {
//       return num;
//     }
//   }
// }

// Time Complexity O(n)
// Space Complexity O(1)
// Better solution !
function majorityElement(nums) {
  let count = 0;
  let res = nums[0];

  for (let num of nums) {
    if (num === res) {
      count += 1;
    } else {
      if (count > 0) {
        count -= 1;
      } else {
        res = num;
      }
    }
  }

  return res;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
