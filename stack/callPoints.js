var calPoints = function (ops) {
  const res = []
  const data = ops.map((item) => {
    return isNumeric(item) ? Number(item) : item
  })

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item === 'C') {
      res.pop()
    } else if (item === 'D') {
      res.push(res[res.length - 1] * 2)
    } else if (item === '+') {
      res.push(res[res.length - 1] + res[res.length - 2])
    } else {
      res.push(item)
    }
  }

  return res.reduce((acc, item) => acc + item, 0)
}

function isNumeric(str) {
  if (typeof str != 'string') return false

  return !isNaN(str) && !isNaN(parseFloat(str))
}

console.log(calPoints(['5', '2', 'C', 'D', '+']))
