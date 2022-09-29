var longestPalindrome = function (s) {
  const hash = new Set();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (hash.has(char)) {
      hash.delete(char);
    } else {
      hash.add(char);
    }
  }

  if (hash.size === 0) {
    return s.length;
  }

  return s.length - hash.size + 1;
};

console.log(longestPalindrome('abccccdd'));
