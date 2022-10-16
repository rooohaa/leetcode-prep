// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).

var strongPasswordCheckerII = function (password) {
  if (password.length < 8) {
    return false;
  }

  const specialChars = new Set('!@#$%^&*()-+'.split(''));
  const lowerLetters = new Set('abcdefghijklmnopqrstuvwxyz'.split(''));
  const upperLetters = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));

  const validator = {
    digit: false,
    lower: false,
    upper: false,
    special: false,
    adjacent: true,
  };

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (lowerLetters.has(char)) {
      validator.lower = true;
    }

    if (upperLetters.has(char)) {
      validator.upper = true;
    }

    if (specialChars.has(char)) {
      validator.special = true;
    }

    if (char === password[i + 1]) {
      validator.adjacent = false;
    }

    if (!isNaN(char)) {
      validator.digit = true;
    }
  }

  return Object.values(validator).every((val) => val === true);
};

// console.log(strongPasswordCheckerII('Me+You--IsMyDream!'));
console.log(
  strongPasswordCheckerII(
    '&3@396+&532#1)5^*^*56$269)(-54(3)7&)@1^)8)(@*@23#-%3189)45+6&8%0756!6+!+6'
  )
);
