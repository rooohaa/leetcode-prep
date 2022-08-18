var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = []; // should store pair [temp, idx]

  for (let i = 0; i < temperatures.length; i++) {
    let temp = temperatures[i];

    while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
      let [lastTemp, lastIdx] = stack.pop();
      res[lastIdx] = i - lastIdx;
    }

    stack.push([temp, i]);
  }

  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
