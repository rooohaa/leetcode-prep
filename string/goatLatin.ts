function toGoatLatin(sentence: string): string {
  const words: string[] = sentence.split(' ');
  const ans: string[] = [];
  const vowels = new Set<string>('aeiou');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const curr = word.split('');

    if (vowels.has(word.charAt(0).toLowerCase())) {
      curr.push('ma');
    } else {
      const first = curr.shift();

      if (first) {
        curr.push(first);
      }

      curr.push('ma');
    }

    for (let j = 0; j < i + 1; j++) {
      curr.push('a');
    }

    ans.push(curr.join(''));
  }

  return ans.join(' ');
}

console.log(toGoatLatin('I speak Goat Latin'));
