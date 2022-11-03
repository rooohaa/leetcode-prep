var oddString = function (words) {
  const map = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const diffArr = [];

    for (let j = 0; j < word.length; j++) {
      if (word[j + 1]) {
        const diff =
          word[j + 1].charCodeAt() - 97 - (word[j].charCodeAt() - 97);
        diffArr.push(diff);
      }
    }

    if (map[diffArr]) {
      map[diffArr].push(word);
    } else {
      map[diffArr] = [word];
    }
  }

  for (let key in map) {
    if (map[key].length === 1) {
      return map[key][0];
    }
  }
};

console.log(oddString(['adc', 'wzy', 'abc']));
