var maxScore = function (cardPoints, k) {
  let left = 0
  let right = cardPoints.length - k
  let total = 0

  for (let i = right; i < cardPoints.length; i++) {
    total += cardPoints[i]
  }

  let maxValue = total

  while (right < cardPoints.length) {
    total += cardPoints[left]
    total -= cardPoints[right]

    maxValue = Math.max(total, maxValue)

    left += 1
    right += 1
  }

  return maxValue
}

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3))
