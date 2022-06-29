function countCharacters(words, chars) {
  let map = {}
  let sum = 0

  for (let char of chars) {
    if (map[char] !== undefined) {
      map[char] += 1
    } else {
      map[char] = 1
    }
  }

  for (let word of words) {
    let currMap = {}
    let canForm = true

    for (let char of word) {
      if (currMap[char] !== undefined) {
        currMap[char] += 1
      } else {
        currMap[char] = 1
      }
    }

    for (let key in currMap) {
      if (!!map[key] && currMap[key] <= map[key]) {
        continue;
      } else {
        canForm = false;
      }
    }

    if (canForm) {
      sum += word.length;
    }
  }

  return sum
}

console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'))
