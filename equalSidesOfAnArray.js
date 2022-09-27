// Codewars - 6kyu Equal Sides Of An Array
function findEvenIndex(arr) {
  for (let N = 0; N < arr.length; N++) {
    const leftSum = arr.slice(0, N).reduce((a, b) => a + b, 0);
    const rightSum = arr.slice(N + 1, arr.length).reduce((a, b) => a + b, 0);
    if (leftSum == rightSum) {
      return N;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
