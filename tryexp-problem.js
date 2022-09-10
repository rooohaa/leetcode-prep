// [[1,4],[2,5],[4,7],[9,10]]
// -> res [[1,7], [9, 10]]

// [[1,4],[2,5],[6,7],[9,10]]
// -> return [[1,5],[6,7],[9,10]]

// Time Complexity O(n logn)

function filterRanges(ranges) {
  if (ranges.length === 0) {
    return []
  }

  const sortedRanges = ranges.sort((a, b) => {
    return a[0] - b[0]
  })

  const res = []

  for (let i = 0; i < sortedRanges.length; i++) {
    const last = res[res.length - 1]
    const [a, b] = sortedRanges[i]

    if (last) {
      if (a >= last[0] && a <= last[1] && b >= last[1]) {
        last[1] = b
      } else {
        res.push([a, b])
      }
    } else {
      res.push([a, b])
    }
  }

  return res
}

console.log(
  filterRanges([
    [1, 4],
    [2, 5],
    [6, 7],
    [9, 10],
  ])
)
