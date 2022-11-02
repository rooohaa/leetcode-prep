def canFormArray(arr, pieces):
  hm = {}

  for piece in pieces:
    hm[piece[0]] = piece

  res = []

  for num in arr:
    if num in hm:
      res += hm[num]
  
  return res == arr

print(canFormArray([15,88], [[88],[15]]))
