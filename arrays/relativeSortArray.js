var relativeSortArray = function (arr1, arr2) {
  const map = {}

  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i]
    map[num] = i
  }

  return arr1.sort((a, b) => {
    let idx1 = map[a]
    let idx2 = map[b]

    if (idx1 || idx2) {
      return idx1 - idx2
    }
    return a - b
  })
}

console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]))
