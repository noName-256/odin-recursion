/**
 * The recursive solution to the fibonacci sequence question!
 * @param {...number} n : Getting the numbers of elements
 * @returns The arrays of elements of the fibonacci sequence
 *
 * Call node fibs.js number1 number2 ...
 * To get the fibonacci sequence with that number of elements
 * Separated on each row
 *
 * Example: node recursive-fibs.js 5 n 7 0
 * Returns:
 * 5: 0,1,1,2,3,5
 * n: Not a number!
 * 7: 0,1,1,2,3,5,8,13
 * 0: Please enter a valid number of elements!
 */

function fibsRec(n) {
  //  actual solution
  //  returns first n numbers of the fibonacci sequence
  return Number.isNaN(n)
    ? "Not a number!"
    : n <= 0
    ? "Please enter a valid number of elements!"
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1).at(-1) + fibsRec(n - 1).at(-2)];
}

// don't worry about this, it handles the parameters given through the terminal
let args = process.argv.slice(2);
for (const argKey in args) {
  const arg = args[argKey];
  console.log(`${arg}: ${fibsRec(+arg)}`);
}
