def isHappy(n):
  digit_sum = 0
  hs = set()

  while True:
    digits = list(str(n))
  
    for digit in digits:
      digit_sum += int(digit) ** 2
  
    n = digit_sum

    if n in hs:
      return False
    else:
      hs.add(n)

    if digit_sum == 1:
      return True

    digit_sum = 0


print(isHappy(19))
print(isHappy(2))

