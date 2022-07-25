var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false

  const st = {}
  const ts = {}

  for (let i = 0; i < s.length; i++) {
    const ch1 = s[i]
    const ch2 = t[i]

    if (st[ch1] && st[ch1] !== ch2) {
      return false
    }

    if (ts[ch2] && ts[ch2] !== ch1) {
      return false
    }

    st[ch1] = ch2
    ts[ch2] = ch1
  }

  return true
}

console.log(isIsomorphic('egg', 'add'))
