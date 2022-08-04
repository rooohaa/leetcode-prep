from collections import Counter

def countWords(words1, words2):
  hm1 = Counter(words1)
  hm2 = Counter(words2)
  count = 0
  
  for word in hm1:
    if word in hm2 and hm2[word] == 1 and hm1[word] == 1:
      count += 1
  
  return count