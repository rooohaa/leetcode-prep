/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  let map = {}

  for (let i = 0; i < items.length; i++) {
    let [id, score] = items[i]

    if (map[id] !== undefined) {
      map[id].push(score)
    } else {
      map[id] = [score]
    }
  }

  for (let id in map) {
    map[id].sort((a, b) => b - a)
  }

  return Object.entries(map).map(([id, scores]) => {
    let sum = 0

    for (let i = 0; i < 5; i++) {
      sum += scores[i]
    }

    return [+id, Math.floor(sum / 5)]
  })
}

console.log(
  highFive([
    [1, 91],
    [1, 92],
    [2, 93],
    [2, 97],
    [1, 60],
    [2, 77],
    [1, 65],
    [1, 87],
    [1, 100],
    [2, 100],
    [2, 76],
  ])
)
