function countBy(x, n) {
  return Array.from(Array(n + 1).keys())
    .slice(1)
    .map((num) => num * x);
}
