function noBoringZeros(n) {
  let str = String(n);
  while (str.endsWith(0)) {
    str = str.slice(0, str.length - 1);
  }
  return Number(str);
}
