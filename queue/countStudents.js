/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  sandwiches.reverse();
  let count = 0;

  while (sandwiches.length > 0 && count !== students.length) {
    const currStudent = students[0];
    const currSandwich = sandwiches[sandwiches.length - 1];

    if (currStudent === currSandwich) {
      count = 0;
      sandwiches.pop();
      students.shift();
    } else {
      students.push(students.shift());
      count += 1;
    }
  }

  return students.length;
};

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
