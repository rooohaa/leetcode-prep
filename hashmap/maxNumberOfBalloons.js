function maxNumberOfBalloons(text) {
  let map = {}
  let balloonMap = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  }
  let min = text.length

  for (let char of text) {
    if (!!map[char]) {
      map[char] += 1
    } else {
      map[char] = 1
    }
  }

  for (let key in balloonMap) {
    let l1 = balloonMap[key] || 0
    let l2 = map[key] || 0

    min = Math.min(min, Math.floor(l2 / l1))
  }

  return min
}

console.log(maxNumberOfBalloons('leetcode'))
