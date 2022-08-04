def countGoodSubstrings(s):
  size = 3
  substr = []
  count = 0

  if len(s) < 3:
    return count
            
  for i in range(0, 3):
    substr.append(s[i])
  
  if (len(substr) == len(set(substr))): 
    count += 1

  for i in range(size, len(s)):
    substr.append(s[i])
    substr.pop(0)

    if (len(substr) == len(set(substr))): 
      count += 1
  
  return count


print(countGoodSubstrings('xyzzaz'))
# -> ["xyz", "yzz", "zza", "zaz"] -> xyz is result
