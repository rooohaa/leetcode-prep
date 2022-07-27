from collections import Counter

def kthDistinct(arr, k):
  table = Counter(arr)
  i = 0

  for letter in table:
    if table[letter] == 1:
      i += 1
    if i == k:
      return letter
  
  return ""

print(kthDistinct(["d","b","c","b","c","a"], 2))
