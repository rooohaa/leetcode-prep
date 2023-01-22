/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = (n, k) => {
  const res = new Array(n)
  const arr = []

  for (let i = 1; i <= 26; i++) {
    arr.push(String.fromCharCode(96 + i))
  }

  for (let i = res.length - 1; i >= 0; i--) {
    let value = Math.min(26, k - i)
    res[i] = arr[value - 1]
    k -= value
  }

  return res.join('')
};

console.log(getSmallestString(3, 27));