var checkIfExist = function (arr) {
  const map = {}

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const possibleRes = num * 2
    const pos = num / 2

    if (map[possibleRes] || map[pos]) {
      return true
    } else {
      map[num] = true
    }
  }

  return false
}

// console.log(checkIfExist([10, 2, 5, 3]))
console.log(checkIfExist([7, 1, 14, 11]))
