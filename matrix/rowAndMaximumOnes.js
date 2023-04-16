/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let maxOnes = 0
  let rowIdx = null

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i]

    let oneCount = 0

    for (let item of row) {
      if (item === 1) oneCount++
    }

    if (oneCount > maxOnes) {
      maxOnes = oneCount
      rowIdx = i
    } else if (oneCount === maxOnes) {
      rowIdx = Math.min(rowIdx, i)
    }
  }

  return [rowIdx, maxOnes]
}

console.log(
  rowAndMaximumOnes([
    [0, 0, 0],
    [0, 1, 1],
  ])
)
