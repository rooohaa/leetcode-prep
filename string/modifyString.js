var modifyString = function (s) {
  const chars = s.split('');
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < chars.length; i++) {
    const curr = chars[i];
    const left = chars[i - 1] || null;
    const right = chars[i + 1] || null;

    if (curr === '?') {
      let j = 0;
      let foundIdx = undefined;

      while (!foundIdx) {
        const letterCandidate = letters[j];

        if (letterCandidate !== left && letterCandidate !== right) {
          foundIdx = j;
        }

        j += 1;
      }

      chars[i] = letters[foundIdx];
    }
  }

  return chars.join('');
};

console.log(modifyString('ubv?w'));
