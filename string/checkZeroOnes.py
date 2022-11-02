def checkZeroOnes(s: str) -> bool:
  max_zeros = 0
  max_ones = 0
  zeros = 0
  ones = 0

  for char in s:
    if char == '0':
      zeros += 1
      max_ones = max(max_ones, ones)
      ones = 0
    else:
      ones += 1
      max_zeros = max(max_zeros, zeros)
      zeros = 0

  max_ones = max(max_ones, ones)
  max_zeros = max(max_zeros, zeros)

  return max_ones > max_zeros

print(checkZeroOnes('111000'))
