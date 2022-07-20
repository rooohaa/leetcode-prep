// Time Complexity O(n)
// Space Complexity O(n)
// Use set for fast lookup and removing items

function findDisappearedNumbers(nums) {
  const set = new Set()
  const N = nums.length

  for (let i = 1; i <= N; i++) {
    set.add(i)
  }

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num)
    }
  }

  return Array.from(set)
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
