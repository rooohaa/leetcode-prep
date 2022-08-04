def titleToNumber(columnTitle):
  alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  hm = {}
  res = pos = 0
  
  for idx, letter in enumerate(alph):
    hm[letter] = idx + 1

  for letter in reversed(columnTitle):
    digit = hm[letter]
    res += digit * 26 ** pos
    pos += 1
  
  return res


print(titleToNumber('C'))
print(titleToNumber('AA'))
