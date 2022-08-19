  var findAndReplacePattern = function (words, pattern) {
    return words.filter((word) => isMatch(word, pattern));
  };

  function isMatch(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }

    const map1 = {};
    const map2 = {};

    for (let i = 0; i < s1.length; i++) {
      const ch1 = s1[i];
      const ch2 = s2[i];

      if (map1[ch1] && map1[ch1] !== ch2) {
        return false;
      }

      if (map2[ch2] && map2[ch2] !== ch1) {
        return false;
      }

      map1[ch1] = ch2;
      map2[ch2] = ch1;
    }

    return true;
  }

console.log(
  findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')
);
console.log(
  findAndReplacePattern(
    [
      'ktittgzawn',
      'dgphvfjniv',
      'gceqobzmis',
      'alrztxdlah',
      'jijuevoioe',
      'mawiizpkub',
      'onwpmnujos',
      'zszkptjgzj',
      'zwfvzhrucv',
      'isyaphcszn',
    ],
    'zdqmjnczma'
  )
);
