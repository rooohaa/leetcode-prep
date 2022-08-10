var arrayRankTransform = function (arr) {
  const sorted = [...new Set(arr)].sort((a, b) => a - b)
  const hm = {}

  for (let i = 0; i < sorted.length; i++) {
    const num = sorted[i]

    hm[num] = i + 1
  }

  return arr.map((num) => hm[num])
}

console.log(arrayRankTransform([40, 10, 20, 30]))
