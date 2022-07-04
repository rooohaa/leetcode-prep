function findComplement(num) {
  let bin = dec2bin(num)
  let resBin = ''

  for (let char of bin) {
    if (char === '0') {
      resBin += '1'
    } else {
      resBin += '0'
    }
  }

  return parseInt(resBin, 2)
}

function dec2bin(dec) {
  return (dec >>> 0).toString(2)
}

console.log(findComplement(5))
