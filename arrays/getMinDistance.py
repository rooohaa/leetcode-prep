def getMinDistance(nums, target, start):
  min_dist = 1001

  for i, num in enumerate(nums):
    if num == target:
      min_dist = min(min_dist, abs(i - start))
  return min_dist

print(getMinDistance([1,2,3,4,5], 5, 3))
