/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = (groupSizes) => {
  const map = {}
  const temp = []

  for (let i = 0; i < groupSizes.length; i += 1) {
    let person = i
    let size = groupSizes[i]

    if (map[size] !== undefined) {

      if (map[size].length === size) {
        temp.push(map[size]);
        map[size] = [person]
      } else {
        map[size].push(person)
      }

    } else {
      map[size] = [person]
    }
  }

  for (let size in map) {
    temp.push(map[size])
  }

  return temp
};


console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
