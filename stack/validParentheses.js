// Time Complexity O(n)
// Stack problem
// Solution: 
// use hashmap to store corresponding brackets to fast lookup
// if bracket is opening push to stack
// if bracket is closing compare top elem of stack to match current bracket

function isValid(s) {
  if (s.length % 2 !== 0) return false;

  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const stack = [];

  for (let char of s) {
    if (map.hasOwnProperty(char)) {
      // if char is opening bracket
      stack.push(char);
    } else {
      // if char is closing bracket
      const top = stack[stack.length - 1];

      if (map[top] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid('(){}[]'));
console.log(isValid('({[]})'));
console.log(isValid('([}}])'));
