function average(salary) {
  let sum = 0

  let maxSalary = Math.max(...salary)
  let minSalary = Math.min(...salary)

  salary.forEach((s) => {
    if (s !== maxSalary && s !== minSalary) {
      sum += s
    }
  })

  return sum / (salary.length - 2)
}

console.log(
  average([
    71000, 46000, 90000, 64000, 11000, 45000, 15000, 60000, 72000, 97000, 1000,
    87000, 96000, 94000, 83000, 5000, 89000,
  ])
)
