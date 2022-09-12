def destCity(paths):
  hm = {}
  
  for path in paths:
    cityA, cityB = path

    hm[cityA] = cityB
  
  for path in paths:
    cityA, cityB = path

    if cityA not in hm:
      return cityA
    
    if cityB not in hm:
      return cityB

print(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
# print(destCity([["B","C"],["D","B"],["C","A"]]))
