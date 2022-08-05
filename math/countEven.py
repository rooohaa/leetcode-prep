def countEven(self, num: int) -> int:
  count = 0
  
  for i in range(num):
    target = i + 1
    digit_sum = 0
      
    while target != 0:
      digit_sum += target % 10
      target = target // 10
          
    if digit_sum % 2 == 0:
      count += 1

  return count
