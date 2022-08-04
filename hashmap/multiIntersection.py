def intersection(nums):
  hm = {}
  res = []
  
  for arr in nums:
    for num in arr:
      if num in hm:
        hm[num] += 1
      else:
        hm[num] = 1

  for key in hm:
    if hm[key] == len(nums):
      res.append(key)
  
  return sorted(res)

print(intersection([[7,34,45,10,12,27,13],[27,21,45,10,12,13]]))
