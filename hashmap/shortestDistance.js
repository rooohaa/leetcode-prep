/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
  let pos1 = -1
  let pos2 = -1
  let minDistance = wordsDict.length

  for (let i = 0; i < wordsDict.length; i++) {
    let word = wordsDict[i]

    if (word === word1) pos1 = i
    if (word === word2) pos2 = i

    if (pos1 !== -1 && pos2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(pos1 - pos2))
    }
  }

  return minDistance
}

console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  ),
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "makes",
    "coding"
  )
)
