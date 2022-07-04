function checkRecord(s) {
  let absCount = 0
  let lateCount = 0

  for (let i = 0; i < s.length; i++) {
    let char = s[i]

    if (char === 'A') absCount += 1

    if (char === 'L') {
      lateCount += 1
    } else {
      lateCount = 0
    }

    if (lateCount >= 3) return false
  }

  if (absCount >= 2) return false

  return true
}

console.log(checkRecord('PPALLL'))
