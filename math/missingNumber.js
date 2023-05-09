/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function (arr) {
  let first = arr[0]
  let last = arr[arr.length - 1]

  let diff = Math.abs(last - first) / arr.length
  let isDecr = first > last

  let nums = []

  if (!isDecr) {
    for (let i = 0; i < arr.length + 1; i++) {
      let val = first + diff * i
      nums.push(val)
    }
  } else {
    for (let i = 0; i < arr.length + 1; i++) {
      let val = first - diff * i
      nums.push(val)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== nums[i]) {
      return nums[i]
    }
  }

  return first
}

// [5,7,9,11,13]

console.log(missingNumber([5, 7, 11, 13]))
console.log(missingNumber([0, 0, 0, 0]))
console.log(missingNumber([1, 1, 1, 1]))
