var shortestCompletingWord = function (licensePlate, words) {
  const map = {};

  for (let i = 0; i < licensePlate.length; i++) {
    let char = licensePlate[i];

    if (char === '' || !isNaN(char)) {
      continue;
    }

    let lower = char.toLowerCase();

    if (map[lower]) {
      map[lower] += 1;
    } else {
      map[lower] = 1;
    }
  }

  const completing = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let letterCount = {};

    for (let k = 0; k < word.length; k++) {
      let letter = word[k];

      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }

    let completingCount = 0;

    for (let letter in map) {
      if (letterCount[letter] && letterCount[letter] >= map[letter]) {
        completingCount += 1;
      }
    }

    if (completingCount === Object.keys(map).length) {
      completing.push(word);
    }
  }

  let shortest = completing[0];

  for (let i = 0; i < completing.length; i++) {
    if (completing[i].length < shortest.length) {
      shortest = completing[i];
    }
  }

  return shortest;
};

console.log(
  shortestCompletingWord('Ah71752', [
    'suggest',
    'letter',
    'of',
    'husband',
    'easy',
    'education',
    'drug',
    'prevent',
    'writer',
    'old',
  ])
);
