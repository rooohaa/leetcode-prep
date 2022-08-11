var maxPower = function (s) {
  if (s.length === 1) return 1

  let max = 0
  let curr = s[0]
  let count = 1

  for (let i = 1; i < s.length; i++) {
    let char = s[i]

    if (char === curr) {
      count += 1
    } else {
      count = 1
      curr = char
    }
    max = Math.max(max, count)
  }

  return max
}

console.log(maxPower('abbcccddddeeeeedcba'))
