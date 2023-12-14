function squareOrSquareRoot(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    Number.isInteger(Math.sqrt(array[i]))
      ? result.push(Math.sqrt(array[i]))
      : result.push(array[i] * array[i]);
  }
  return result;
}
