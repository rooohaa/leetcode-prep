from collections import Counter

def checkAlmostEquivalent(word1: str, word2: str) -> bool:
  my_set = set(word1 + word2)
  table1 = Counter(word1)
  table2 = Counter(word2)

  for letter in my_set:
    f1 = table1.get(letter, 0)
    f2 = table2.get(letter, 0)
    diff = abs(f1 - f2)
    
    if diff > 3:
      return False

  return True

print(checkAlmostEquivalent("aaaa", "bccb"))
