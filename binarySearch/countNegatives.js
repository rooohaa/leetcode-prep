var countNegatives = function (grid) {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    count += binSearch(grid[i])
  }

  return count
}

function binSearch(arr) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] >= 0) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return arr.length - left
}

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
)
