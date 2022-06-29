function restoreString(s, indices) {
  const res = new Array(s.length).fill('')

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const currIdx = indices[i]

    res[currIdx] = char
  }

  return res.join('')
}

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]))
