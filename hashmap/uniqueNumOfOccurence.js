// Time Complexity O(n)
// Space Complexity O(n)
// HashMap & HashSet

function uniqueOccurrences(arr) {
  let map = {}
  let set = new Set()

  for (let num of arr) {
    if (!!map[num]) {
      map[num] += 1
    } else {
      map[num] = 1
    }
  }

  for (let key in map) {
    let numOfOccurence = map[key]

    if (set.has(numOfOccurence)) {
      return false
    }

    set.add(numOfOccurence)
  }

  return map
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
