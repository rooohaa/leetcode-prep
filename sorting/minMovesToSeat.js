/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  let ans = 0;
  let N = students.length;

  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    let currStudent = students[i];
    let currSeat = seats[i];

    ans += Math.abs(currSeat - currStudent);
  }

  return ans;
};

console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]));
