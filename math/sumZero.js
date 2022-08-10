var sumZero = function (n) {
  const res = []

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    res.push(i)
    res.push(-i)
  }

  if (n % 2 !== 0) res.push(0)
  return res
}

console.log(sumZero(5)) // -> [1, -1, 2, -2, 0] sum is 0
