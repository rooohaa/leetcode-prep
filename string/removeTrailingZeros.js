// Time O(n), Space O(n)
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let res = []
  let isTrailing = true

  for (let i = num.length - 1; i >= 0; i--) {
    let curr = num[i]

    if (curr === "0" && !isTrailing) res.push(curr)
    else if (curr !== "0") {
      res.push(curr)
      isTrailing = false
    }
  }

  return res.reverse().join('')
}

console.log(removeTrailingZeros("51230100"))
