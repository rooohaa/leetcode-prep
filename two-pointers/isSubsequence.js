function isSubsequence(s, t) {
  let j = 0

  for (let i = 0; i < t.length; i++) {
    let char = t[i]

    if (char === s[j]) {
      j += 1
    }
  }

  return j === s.length
}

console.log(isSubsequence('abc', 'ahbgdc'))
