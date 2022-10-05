def numDifferentIntegers(word):
  nums = set()
  curr_num = ""

  for char in word:
    if char.isnumeric():
      curr_num += char
    else:
      if curr_num:
        nums.add(int(curr_num))
      curr_num = ""

  if curr_num:
    nums.add(int(curr_num))

  return len(nums)


print(numDifferentIntegers('a123bc34d8ef34'))
