def romanToInt(s):
  hm = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  res = 0

  for i in range(0, len(s)):
    char = s[i]
    
    if i + 1 < len(s) and hm[char] < hm[s[i + 1]]:
      res += hm[char] * - 1
    else:
      res += hm[char]

  return res

print(romanToInt('III'))
print(romanToInt('LVIII'))
print(romanToInt('MCMXCIV')) # -> 1994