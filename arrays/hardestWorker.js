/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let max = 0;
  let startTime = 0;
  let workerId = 0;

  for (let i = 0; i < logs.length; i++) {
    let [id, leaveTime] = logs[i];
    let timeDiff = leaveTime - startTime;

    if (timeDiff >= max) {
      if (timeDiff > max) {
        workerId = id;
      } else {
        workerId = Math.min(workerId, id);
      }
      max = timeDiff;
    }

    startTime = leaveTime;
  }

  return workerId;
};

// console.log(
//   hardestWorker(10, [
//     [0, 3],
//     [2, 5],
//     [0, 9],
//     [1, 15],
//   ])
// );

console.log(
  hardestWorker(2, [
    [0, 10],
    [1, 20],
  ])
);
