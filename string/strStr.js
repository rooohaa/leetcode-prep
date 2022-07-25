var strStr = function (haystack, needle) {
  if (!needle) return 0

  let j = 0
  const indexes = []

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      j += 1
      indexes.push(i)
    }

    if (j === needle.length) {
      return indexes[0]
    }
  }

  return -1
}

console.log(strStr('mississippi', 'issip'))
