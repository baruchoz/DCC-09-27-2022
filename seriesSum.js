// Codewars - 7 kyu Sum of the first nth term of Series
function SeriesSum(n) {
  let sum = 0;
  let dividend = 1;
  for (let i = 0; i < n; i++) {
    sum += 1 / dividend;
    dividend += 3;
  }
  return sum.toFixed(2).toString();
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));
