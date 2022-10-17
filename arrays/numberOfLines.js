var numberOfLines = function (widths, s) {
  const MAX_PIXELS = 100;
  let lines = 1;
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const widthIdx = s[i].charCodeAt() - 97;
    const letter = s[i];
    total += widths[widthIdx];

    if (total > MAX_PIXELS) {
      lines += 1;
      total = widths[widthIdx];
    }
  }

  return [lines, total];
};

console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    'abcdefghijklmnopqrstuvwxyz'
  )
);
