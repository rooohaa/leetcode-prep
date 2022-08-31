var maximumUnits = function (boxTypes, truckSize) {
  const sortedByUnits = boxTypes.sort((a, b) => b[1] - a[1]);
  let currNumOfBoxes = 0;
  let total = 0;

  for (let i = 0; i < sortedByUnits.length; i++) {
    const [numberOfBoxes, numberOfUnitsPerBox] = sortedByUnits[i];

    if (currNumOfBoxes + numberOfBoxes <= truckSize) {
      currNumOfBoxes += numberOfBoxes;
      total += numberOfBoxes * numberOfUnitsPerBox;
    } else {
      let rest = truckSize - currNumOfBoxes;
      total += rest * numberOfUnitsPerBox;
      break;
    }
  }

  return total;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
