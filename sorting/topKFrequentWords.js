var topKFrequent = function (words, k) {
  const map = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (map[word]) {
      map[word] += 1;
    } else {
      map[word] = 1;
    }
  }

  const sorted = Object.entries(map).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  return sorted.slice(0, k).map((el) => el[0]);
};

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));
