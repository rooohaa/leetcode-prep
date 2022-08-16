var numberOfPairs = function (nums) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (map[num]) {
      map[num] += 1
    } else {
      map[num] = 1
    }
  }

  let even = 0
  let odd = 0

  for (let key in map) {
    let count = map[key]

    even += Math.floor(count / 2)

    if (count % 2 !== 0) {
      odd += count % 2
    }
  }

  return [even, odd]
}
