//cp
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  return sum;
}
//build in function
// function positiveSum(arr) {
//   return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);
// }
//Sum of positive
// console.log(positiveSum([5, 6, 7, -8, 9]));
//45
