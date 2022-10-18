var makeGood = function (s) {
  if (s === '') {
    return '';
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const last = stack[stack.length - 1];

    if (!last) {
      stack.push(curr);
      continue;
    }

    if (
      (curr === curr.toLowerCase() && last === curr.toUpperCase()) ||
      (curr === curr.toUpperCase() && last === curr.toLowerCase())
    ) {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }

  return stack.join('');
};

// console.log(makeGood('leEeetcode'));
console.log(makeGood('mC'));
