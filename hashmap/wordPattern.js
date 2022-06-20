// Time and Space complexity is O(n)

function wordPattern(pattern, s) {
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  const map = new Map();
  const visitedWords = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (!map.has(char) && visitedWords[word] !== true) {
      map.set(char, word);
      visitedWords[word] = true;
    }
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const char = pattern[i];

    if (word !== map.get(char)) {
      return false;
    }
  }

  return true;
}
