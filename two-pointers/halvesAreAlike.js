// Time Complexity O(n)
// Space Complexity O(1) because we have 12 vowels
// two pointers, set, string

function halvesAreAlike(s) {
  if (s.length % 2 !== 0) return false

  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let counter1 = 0
  let counter2 = 0

  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (vowels.has(s[left])) counter1 += 1
    if (vowels.has(s[right])) counter2 += 1

    left += 1
    right -= 1
  }

  return counter1 === counter2
}

console.log(halvesAreAlike('textbook'))
console.log(halvesAreAlike('book'))
