function sumArray(array) {
  if (array == 0) return 0;
  let sum = array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
  return sum;
}
// 47
//Sum without highest and lowest number
