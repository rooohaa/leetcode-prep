function secondHighest(s) {
  let max = -1;
  let prevMax = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Is numeric
    if (!isNaN(char)) {
      const num = +char;

      if (num > max) {
        prevMax = max;
        max = num;
      } else if (max > num && num > prevMax) {
        prevMax = num;
      }
    }
  }

  return prevMax;
}

// console.log(secondHighest('dfa12321afd'));
// console.log(secondHighest('sjhtz8344'));
console.log(secondHighest('dfa12321afd'));
