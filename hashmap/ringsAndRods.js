// Time & Space complexit -> O(n)
// Use hashmap and set for O(1) lookups

function countPoints(rings) {
  const arr = []
  const rods = {}

  for (let i = 0; i < rings.length; i += 2) {
    const item = `${rings[i]}${rings[i + 1]}`

    arr.push(item)
  }

  for (let i = 0; i < arr.length; i++) {
    const [color, rod] = arr[i]

    if (rods[rod] !== undefined) {
      rods[rod].add(color)
    } else {
      rods[rod] = new Set([color])
    }
  }

  let count = 0

  for (const rod in rods) {
    const currSet = rods[rod]

    if (currSet.has('R') && currSet.has('G') && currSet.has('B')) {
      count += 1
    }
  }

  return count
}

console.log(countPoints('B0B6G0R6R0R6G9'))
