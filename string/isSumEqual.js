var isSumEqual = function (firstWord, secondWord, targetWord) {
  function toNumeric(word) {
    let res = '';

    for (let i = 0; i < word.length; i++) {
      res += word[i].charCodeAt() - 97;
    }

    return parseInt(res);
  }

  return toNumeric(firstWord) + toNumeric(secondWord) === toNumeric(targetWord);
};

console.log(isSumEqual('aaa', 'a', 'aaaa'));
