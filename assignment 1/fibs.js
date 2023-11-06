/**
 * The iterative solution to the fibonacci sequence question!
 * @param {number} n : Getting the number of elements
 * @returns The array of elements of the fibonacci sequence
 *
 * Call node fibs.js number1 number2 ...
 * To get the fibonacci sequence with that number of elements
 * Separated on each row
 *
 * Example: node fibs.js 5 n 7 0
 * Returns:
 * 5: 0,1,1,2,3,5
 * n: Not a number!
 * 7: 0,1,1,2,3,5,8,13
 * 0: Please enter a valid number of elements!
 */

function fibsRec(n) {
  //  actual solution
  //  returns first n numbers of the fibonacci sequence
  if (Number.isNaN(n)) {
    return "Not a number!";
  }
  if (n <= 0) {
    return "Please enter a valid number of elements!";
  }
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) answer.push(answer[i - 1] + answer[i - 2]);
  /* i starts at 2 because first 2 numbers(index 0 and 1) are already set */
  return answer;
}

/* don't worry about this, it handles the parameters given through the terminal */
let args = process.argv.slice(2);
args.forEach((arg) => {
  console.log(`${arg}: ${fibsRec(+arg)}`);
});
