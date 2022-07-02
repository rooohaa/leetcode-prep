function findFinalValue(nums, original) {
  let set = new Set(nums)
  let res = original

  if (!set.has(res)) {
    return res
  }

  set.forEach((num) => {
    if (set.has(res)) {
      res = res * 2
    }
  })

  return res
}
