function kidsWithCandies(candies, extraCandies) {
  const maxCandies = Math.max(...candies)

  return candies.map((c) => {
    if (c + extraCandies >= maxCandies) {
      return true
    }
    return false
  })
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))
