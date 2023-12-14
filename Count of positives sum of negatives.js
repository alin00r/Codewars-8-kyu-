function countPositivesSumNegatives(input) {
  if (input === null || input.length == 0) return [];
  let positiveCount = input.filter((x) => x > 0).length;
  let nigativeSums = input
    .filter((x) => x < 0)
    .reduce((acc, current) => acc + current, 0);
  return [positiveCount, nigativeSums];
}
