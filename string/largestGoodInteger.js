/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  if (!num) {
    return '';
  }

  let arr = [
    '999',
    '888',
    '777',
    '666',
    '555',
    '444',
    '333',
    '222',
    '111',
    '000',
  ];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    if (num.indexOf(el) >= 0) {
      return el;
    }
  }

  return '';
};

console.log(largestGoodInteger('6777133339'));
console.log(largestGoodInteger('2300019'));
