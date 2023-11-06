/**
 * The merge sort algorithm!
 * @param {array} array
 * @returns Sorted array
 *
 * Call node merge-sort.js number1 number2 ...
 * To sort all numbers
 *
 * Example: node merge-sort.js 5 1 6 3 2 4
 * Returns:
 * [1, 2, 3, 4, 5, 6]
 */
function mergeSortedArrays(array1, array2) {
  let array = [];
  let i = 0,
    j = 0;
  while (i < array1.length && j < array2.length)
    if (array1[i] < array2[j]) {
      array.push(array1[i]);
      i++;
    } else {
      array.push(array2[j]);
      j++;
    }
  for (; i < array1.length; i++) array.push(array1[i]);
  for (; j < array2.length; j++) array.push(array2[j]);
  return array;
}
function mergeSort(array) {
  if (array.length <= 1) return array;
  return mergeSortedArrays(
    mergeSort(array.slice(0, array.length / 2)),
    mergeSort(array.slice(array.length / 2))
  );
}

/* don't worry about this, it handles the parameters given through the terminal */
let args = process.argv.slice(2);
let array = [];
args.forEach((value) => {
  array.push(+value);
});
if (array.every((number) => number !== NaN)) console.log(mergeSort(array));
else console.log("Invalid array");
