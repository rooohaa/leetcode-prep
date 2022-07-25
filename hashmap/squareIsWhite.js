var squareIsWhite = function (coordinates) {
  const [letter, num] = coordinates

  const letterMap = {
    a: 1,
    b: 0,
    c: 1,
    d: 0,
    e: 1,
    f: 0,
    g: 1,
    h: 0,
  }

  const numMap = {}
  const type = letterMap[letter]

  if (type === 1) {
    for (let i = 1; i <= 8; i++) {
      numMap[i] = i % 2 !== 0 ? 1 : 0
    }
  } else {
    for (let i = 1; i <= 8; i++) {
      numMap[i] = i % 2 !== 0 ? 0 : 1
    }
  }

  return numMap[num] === 0
}

console.log(squareIsWhite('a1'))
