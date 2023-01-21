/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
function evaluate(s, knowledge) {
  const knowledgeMap = {};

  for (let i = 0; i < knowledge.length; i++) {
    let [key, value] = knowledge[i];
    knowledgeMap[key] = value;
  }

  let isKey = false;
  let currWord = [];
  const res = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr === '(') {
      isKey = true;
    } else if (curr === ')') {
      isKey = false;
      let word = currWord.join('');

      res.push(knowledgeMap[word] ?? '?');
      currWord = [];
    } else {
      if (!isKey) {
        res.push(curr);
      } else {
        currWord.push(curr);
      }
    }
  }

  return res.join('');
};

console.log(
  evaluate('(name)is(age)yearsold', [
    ['name', 'bob'],
    ['age', 'two'],
  ])
);
