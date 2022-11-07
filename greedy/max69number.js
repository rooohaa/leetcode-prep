var maximum69Number = function (num) {
  const digits = num.toString().split('').map(Number);

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 6) {
      digits[i] = 9;
      break;
    }
  }

  return +digits.join('');
};

console.log(maximum69Number(9669));
