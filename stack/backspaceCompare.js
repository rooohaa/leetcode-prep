var backspaceCompare = function (s, t) {
  function buildString(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (char !== '#') {
        stack.push(char);
      } else {
        stack.pop();
      }
    }

    return stack.join('');
  }

  return buildString(s) === buildString(t);
};

console.log(backspaceCompare('ab#c', 'ad#c'));
