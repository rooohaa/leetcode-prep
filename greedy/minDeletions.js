/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = (s) => {
  const map = new Map()
  const set = new Set()
  let deletions = 0

  for (const char of s) {
    if (map.has(char))
      map.set(char, map.get(char) + 1)
    else
      map.set(char, 1)
  }

  for (let [_, freq] of map.entries()) {
    while (set.has(freq) && freq > 0) {
      freq -= 1
      deletions += 1
    }
    set.add(freq)
  }

  return deletions
};

console.log(minDeletions('aaabbbcc'));
