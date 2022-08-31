var findOcurrences = function (text, first, second) {
  const occur = [];
  const words = text.split(' ');

  for (let i = 0; i < words.length - 2; i++) {
    const fir = words[i];
    const sec = words[i + 1];
    const thir = words[i + 2];

    if (fir === first && sec === second) {
      occur.push(thir);
    }
  }

  return occur;
};

console.log(
  findOcurrences('alice is a good girl she is a good student', 'a', 'good')
);
