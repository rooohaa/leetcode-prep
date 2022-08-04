var minimumAbsDifference = function (arr) {
  const res = []
  const PAIR_SIZE = 2
  const sorted = arr.sort((a, b) => a - b)
  let minDiff = Math.abs(sorted[0] - sorted[1])

  for (let i = 0; i < sorted.length - 1; i++) {
    minDiff = Math.min(minDiff, Math.abs(sorted[i] - sorted[i + 1]))
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    let first = arr[i]
    let second = arr[i + 1]

    if (Math.abs(first - second) === minDiff) {
      res.push([first, second])
    }
  }

  return res
}

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))
console.log(minimumAbsDifference([40, 11, 26, 27, -20]))
