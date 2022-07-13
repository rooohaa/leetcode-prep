function numIdenticalPairs(nums) {
  const map = {}
  let pairs = 0

  for (const num of nums) {
    if (map[num] !== undefined) {
      map[num] += 1
    } else {
      map[num] = 1
    }
  }

  for (const key in map) {
    const count = map[key]

    // n * (n – 1) // 2
    pairs += (count * (count - 1)) / 2
  }

  return pairs
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
