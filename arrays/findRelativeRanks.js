var findRelativeRanks = function (scores) {
  const valueToRank = {}
  const sortedScores = [...scores].sort((a, b) => a - b)

  for (let i = 0; i < sortedScores.length; i++) {
    const score = sortedScores[i]

    if (i === sortedScores.length - 1) {
      valueToRank[score] = 'Gold Medal'
    } else if (i === sortedScores.length - 2) {
      valueToRank[score] = 'Silver Medal'
    } else if (i === sortedScores.length - 3) {
      valueToRank[score] = 'Bronze Medal'
    } else {
      valueToRank[score] = `${scores.length - i}`
    }
  }

  return scores.map((value) => valueToRank[value])
}

console.log(findRelativeRanks([10, 3, 8, 9, 4]))
