var freqAlphabets = function (s) {
  let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()
  let map = {}
  let res = []

  for (let i = 0; i < alph.length; i++) {
    let letter = alph[i]
    let idx = i + 1
    let key = idx < 10 ? idx : `${idx}#`
    map[key] = letter
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      let key = `${s[i]}${s[i + 1]}#`
      res.push(map[key])
      i += 2
    } else {
      res.push(map[s[i]])
    }
  }

  return res.join('')
}
