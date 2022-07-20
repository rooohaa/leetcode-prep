// Time Complexity O(log n)
// Space Complexity O(1)

function isPowerOfTwo(n) {
  let power = 1

  while (power < n) {
    power *= 2
  }

  return power === n
}

console.log(isPowerOfTwo(64))
console.log(isPowerOfTwo(3))
